import {Action, createReducer, on} from '@ngrx/store';
import {retrieveMeetups} from "./actions/meetups.actions";


export const meetupsFeatureKey = 'meetups';

export interface State {
  meetups: Array<any>;
  meetup: any;
}

export const initialState: State = {
  meetups: [],
  meetup: null
};

export const reducer = createReducer(initialState, on(retrieveMeetups, (state) => {
  console.log('ok')
    return {
      ...state
      , meetups:['sss']
  }
  }
));
