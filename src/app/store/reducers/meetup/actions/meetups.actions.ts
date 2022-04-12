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
export const startCreateMeetup = createAction(
  '[Meetups] Start Create Meetup',
  props<{ meetup: object }>()
);
export const createMeetupSuccess = createAction(
  '[Meetups] Create Meetup Success'
  , props<{ meetups: any }>()
);
export const createMeetupFail = createAction(
  '[Meetups] Create Meetup Fail'
  , props<{ error: any }>()
);
export const startUpdateMeetup = createAction(
  '[Meetups] Start Update Meetup',
  props<{ meetupId: string, meetup: any }>()
);
export const updateMeetupSuccess = createAction(
  '[Meetups] Update Meetup Success'
  , props<{ meetup: any }>()
);
export const updateMeetupFail = createAction(
  '[Meetups] Update Meetup Fail'
  , props<{ error: any }>()
);
export const startDeleteMeetup = createAction(
  '[Meetups] Start Delete Meetup',
  props<{ meetupId: number }>()
);
export const deleteMeetupSuccess = createAction(
  '[Meetups] Delete Meetup Success'
  , props<{ meetups: any }>()
);
export const deleteMeetupFail = createAction(
  '[Meetups] Delete Meetup Fail'
  , props<{ error: any }>()
);
