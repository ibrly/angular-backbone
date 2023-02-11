import {createReducer, on} from '@ngrx/store';
import {
  createMeetupFail,
  createMeetupSuccess,
  deleteMeetupFail,
  deleteMeetupSuccess,
  retrieveMeetupFail,
  retrieveMeetupsFail,
  retrieveMeetupsSuccess,
  retrieveMeetupSuccess,
  updateMeetupFail,
  updateMeetupSuccess
} from "./meetups.actions";
import {Meetup} from "../../../http/models/Meetup";



export interface MeetupsState {
  meetups: Array<Meetup>;
  meetup?: Meetup;
  error: any;
}

export const initialState: MeetupsState = {
  meetups: [],
  meetup: undefined,
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
        , meetup: payload.meetup
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
