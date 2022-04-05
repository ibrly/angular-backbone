import { createAction, props } from '@ngrx/store';

export const loadMeetupss = createAction(
  '[Meetups] Load Meetupss'
);

export const loadMeetupssSuccess = createAction(
  '[Meetups] Load Meetupss Success',
  props<{ data: any }>()
);

export const loadMeetupssFailure = createAction(
  '[Meetups] Load Meetupss Failure',
  props<{ error: any }>()
);
