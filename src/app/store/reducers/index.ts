import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as meetups from './meetup/meetups.reducer';

export const stateFeatureKey = 'state';

export interface State {
  meetups: meetups.MeetupsState;
}

export const reducers: ActionReducerMap<State> = {
  meetups: meetups.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
