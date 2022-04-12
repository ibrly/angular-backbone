import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../store/reducers";
import {startRetrieveMeetup} from "../../store/reducers/meetup/actions/meetups.actions";

@Component({
  selector: 'app-retrieve-one',
  templateUrl: './retrieve-one.component.html',
  styleUrls: ['./retrieve-one.component.scss']
})
export class RetrieveOneComponent implements OnInit {
  loading: boolean = true;
  meetUp: any;
  update: boolean = false;

  constructor(private store: Store<State>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.dispatch(startRetrieveMeetup({meetupId: params['id']}));
    });
    this.store.select('meetups').subscribe(state => {
      this.loading = false;
      this.meetUp = state.meetup;
    });
  }

  updateMeetUp() {
    this.loading = true;
    /*   this.http.updateMeetup(this.meetUp.attributes, this.meetUp.id).subscribe(data => {
         this.meetUp = data['data'];
         this.update = false;
         this.loading = false;
       })*/
  }


}
