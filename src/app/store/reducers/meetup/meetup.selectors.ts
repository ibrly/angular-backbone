import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MeetupsState} from "./meetups.reducer";


export const selectMeetups = createFeatureSelector<MeetupsState>("meetups")

export const selectMeetupsItems = createSelector(selectMeetups, (state: MeetupsState) => state.meetups)
export const selectMeetup = createSelector(selectMeetups, (state: MeetupsState) => state.meetup)
