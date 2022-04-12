import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../store/reducers/meetup/meetups.reducer";
import {retrieveMeetups} from "../store/reducers/meetup/actions/meetups.actions";

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(retrieveMeetups())
  }

}
