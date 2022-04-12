import {createAction, props} from '@ngrx/store';

export const startRetrieveMeetups = createAction(
  '[Meetups] Start Retrieve Meetups'
);
export const retrieveMeetupsSuccess = createAction(
  '[Meetups] Retrieve Meetups Success'
  , props<{ meetups: any }>()
);
export const retrieveMeetupsFail = createAction(
  '[Meetups] Retrieve Meetups Fail'
  , props<{ error: any }>()
);
export const startRetrieveMeetup = createAction(
  '[Meetups] Start Retrieve Meetup',
  props<{ meetupId: string }>()
);
export const retrieveMeetupSuccess = createAction(
  '[Meetups] Retrieve Meetup Success'
  , props<{ meetup: any }>()
);
export const retrieveMeetupFail = createAction(
  '[Meetups] Retrieve Meetup Fail'
  , props<{ error: any }>()
);
