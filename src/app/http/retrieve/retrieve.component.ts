import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {Store} from "@ngrx/store";
import {startDeleteMeetup, startRetrieveMeetups} from "../../store/reducers/meetup/actions/meetups.actions";
import {State} from "../../store/reducers";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [animate(1000, style({opacity: 0, transform: 'translateX(-100%)'}))]),
      transition('* => void', [animate(1000, style({opacity: 0, transform: 'translateX(100%)'}))])
    ])
  ]
})
export class RetrieveComponent implements OnInit {
  loading: boolean = true;
  meetups: Array<{ id: number, attributes: { title: string, description: string, address: string, image: string } }>;

  constructor(private http: HttpService, private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(startRetrieveMeetups())
    this.store.select('meetups').subscribe(meetupd => {
      this.meetups = meetupd.meetups;
      this.loading = false;
    })
  }

  onDelete(id: number) {
    this.loading = true;
    this.store.dispatch(startDeleteMeetup({meetupId: id}))
  }
}
