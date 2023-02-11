import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../store/reducers";
import {
  startDeleteMeetup,
  startRetrieveMeetup,
  startRetrieveMeetups,
  startUpdateMeetup
} from "../store/reducers/meetup/meetups.actions";
import {selectMeetup, selectMeetupsItems} from "../store/reducers/meetup/meetup.selectors";
import {Meetup} from "./models/Meetup";

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {

  constructor(private store: Store<State>) {
  }

  retrieveMeetups() {
    this.store.dispatch(startRetrieveMeetups())
    return this.store.select(selectMeetupsItems)
  }

  deleteMeetup(id: number) {
    this.store.dispatch(startDeleteMeetup({meetupId: id}))
  }

  retrieveOne(id: number) {
    this.store.dispatch(startRetrieveMeetup({meetupId: id}));
    return this.store.select(selectMeetup)

  }

  updateMeetup(meetup: Meetup) {
    this.store.dispatch(startUpdateMeetup({meetup: meetup}));

  }
}
