import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../store/reducers";
import {startRetrieveMeetup, startUpdateMeetup} from "../../store/reducers/meetup/actions/meetups.actions";

@Component({
  selector: 'app-retrieve-one',
  templateUrl: './retrieve-one.component.html',
  styleUrls: ['./retrieve-one.component.scss']
})
export class RetrieveOneComponent implements OnInit {
  loading: boolean = true;
  meetUp: any;
  update: boolean = false;
  id: string;

  constructor(private store: Store<State>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.store.dispatch(startRetrieveMeetup({meetupId: params['id']}));
    });
    this.store.select('meetups').subscribe(state => {
      this.loading = false;
      this.meetUp = {...state.meetup.attributes};
    });
  }

  updateMeetUp() {
    this.loading = true;
    this.store.dispatch(startUpdateMeetup({meetupId: this.id, meetup: this.meetUp}));
    this.loading = false;
    this.update = false;
  }


}
