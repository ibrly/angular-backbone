import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {MeetupsEffects} from './meetups.effects';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('MeetupsEffects', () => {
  let actions$: Observable<any>;
  let effects: MeetupsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MeetupsEffects,
        provideMockActions(() => actions$),
        HttpClient,HttpHandler
      ]
    });

    effects = TestBed.inject(MeetupsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
