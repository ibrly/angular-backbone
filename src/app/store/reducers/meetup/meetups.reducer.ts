import {Action, createReducer, on} from '@ngrx/store';
import {
  createMeetupFail,
  createMeetupSuccess, deleteMeetupFail, deleteMeetupSuccess,
  retrieveMeetupFail,
  retrieveMeetupsFail,
  retrieveMeetupsSuccess,
  retrieveMeetupSuccess, updateMeetupFail, updateMeetupSuccess
} from "./actions/meetups.actions";


export const meetupsFeatureKey = 'meetups';

export interface State {
  meetups: Array<{ id: number, attributes: { title: string, description: string, address: string, image: string } }>;
  meetup: any;
  error: any;
}

export const initialState: State = {
  meetups: [],
  meetup: null,
  error: null
};

export const reducer = createReducer(initialState,
  on(retrieveMeetupsSuccess, (state, payload) => {
      return {
        ...state
        , meetups: [...payload.meetups]
      }
    }
  ), on(retrieveMeetupsFail, (state, payload) => {
      return {
        ...state
        , error: [...payload.error]
      }
    }
  ), on(retrieveMeetupSuccess, (state, payload) => {
      return {
        ...state
        , meetup: payload.meetup
      }
    }
  ), on(retrieveMeetupFail, (state, payload) => {
      return {
        ...state
        , error: [...payload.error]
      }
    }
  ), on(updateMeetupSuccess, (state, payload) => {
      return {
        ...state
        , meetup: payload.meetup
      }
    }
  ), on(updateMeetupFail, (state, payload) => {
      return {
        ...state
        , error: [...payload.error]
      }
    }
  ), on(createMeetupSuccess, (state, payload) => {
      return {
        ...state
        , meetups: payload.meetups
      }
    }
  ), on(createMeetupFail, (state, payload) => {
      return {
        ...state
        , error: [...payload.error]
      }
    }
  ), on(deleteMeetupSuccess, (state, payload) => {
      return {
        ...state
        , meetups: payload.meetups
      }
    }
  ), on(deleteMeetupFail, (state, payload) => {
      return {
        ...state,
        error: [...payload.error]
      }
    }
  ));
