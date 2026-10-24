import {TestBed} from '@angular/core/testing';
import {HttpErrorResponse} from '@angular/common/http';
import {Store, StoreModule} from '@ngrx/store';
import {
  createMeetupFail,
  deleteMeetupFail,
  deleteMeetupSuccess,
  retrieveMeetupFail,
  retrieveMeetupsFail,
  retrieveMeetupsSuccess,
  retrieveMeetupSuccess,
  toMeetupsError,
  updateMeetupFail
} from './meetups.actions';
import {initialState, reducer} from './meetups.reducer';
import {Meetup} from '../../../http/models/Meetup';

const meetup = (id: number): Meetup => ({
  id,
  attributes: {title: `Meetup ${id}`, description: 'desc', address: 'Cairo', image: 'img.png'}
});

describe('meetups reducer', () => {
  it('returns the initial state for an unknown action', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('stores the retrieved list and the selected meetup', () => {
    const listed = reducer(initialState, retrieveMeetupsSuccess({meetups: [meetup(1), meetup(2)]}));
    expect(listed.meetups.map(m => m.id)).toEqual([1, 2]);

    const selected = reducer(listed, retrieveMeetupSuccess({meetup: meetup(2)}));
    expect(selected.meetup?.id).toBe(2);
    expect(selected.meetups.length).toBe(2);
  });

  it('replaces the list after a delete', () => {
    const state = reducer(initialState, retrieveMeetupsSuccess({meetups: [meetup(1), meetup(2)]}));
    expect(reducer(state, deleteMeetupSuccess({meetups: [meetup(2)]})).meetups.map(m => m.id)).toEqual([2]);
  });

  // The effects turn the HttpErrorResponse into plain data before dispatching it.
  const httpError = toMeetupsError(new HttpErrorResponse({status: 500, statusText: 'Server Error', url: '/api/meetups'}));
  const failActions = [
    retrieveMeetupsFail({error: httpError}),
    retrieveMeetupFail({error: httpError}),
    createMeetupFail({error: httpError}),
    updateMeetupFail({error: httpError}),
    deleteMeetupFail({error: httpError})
  ];

  failActions.forEach(action => {
    it(`keeps the error on ${action.type}`, () => {
      const state = reducer(initialState, action);
      expect(state.error).toEqual({status: 500, message: 'Http failure response for /api/meetups: 500 Server Error'});
      expect(state.meetups).toEqual([]);
    });
  });

  it('keeps the store processing actions after a failed request', () => {
    TestBed.configureTestingModule({imports: [StoreModule.forRoot({meetups: reducer})]});
    const store = TestBed.inject(Store);
    const counts: number[] = [];
    store.select((state: any) => state.meetups.meetups.length).subscribe(count => counts.push(count));

    store.dispatch(retrieveMeetupsFail({error: httpError}));
    store.dispatch(retrieveMeetupsSuccess({meetups: [meetup(1)]}));

    expect(counts).toEqual([0, 1]);
  });
});
