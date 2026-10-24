import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {MeetupsEffects} from './meetups.effects';
import {createMeetupFail, retrieveMeetupsSuccess, startCreateMeetup} from './meetups.actions';

const API = 'http://localhost:1350/api/meetups';

describe('MeetupsEffects', () => {
  let actions$: Observable<any>;
  let effects: MeetupsEffects;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MeetupsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MeetupsEffects);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('createMeetup$', () => {
    it('reloads the list after a successful create', () => {
      const emitted: Action[] = [];
      actions$ = of(startCreateMeetup({meetup: {title: 'new'}}));
      effects.createMeetup$.subscribe(action => emitted.push(action));

      http.expectOne({method: 'POST', url: `${API}/`}).flush({data: {id: 3}});
      http.expectOne({method: 'GET', url: API}).flush({data: [{id: 3}]});

      expect(emitted).toEqual([retrieveMeetupsSuccess({meetups: [{id: 3}] as any})]);
    });

    it('reports a failed create as createMeetupFail and does not reload', () => {
      const emitted: Action[] = [];
      actions$ = of(startCreateMeetup({meetup: {title: 'new'}}));
      effects.createMeetup$.subscribe(action => emitted.push(action));

      http.expectOne({method: 'POST', url: `${API}/`}).flush(null, {status: 400, statusText: 'Bad Request'});
      http.expectNone(API);

      expect(emitted.length).toBe(1);
      expect(emitted[0].type).toBe(createMeetupFail.type);
    });
  });
});
