import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../store/reducers";
import {Observable} from "rxjs";
import {Meetup} from "../models/Meetup";
import {MeetupsService} from "../meetups.service";

@Component({
  selector: 'app-retrieve-one',
  templateUrl: './retrieve-one.component.html',
  styleUrls: ['./retrieve-one.component.scss']
})
export class RetrieveOneComponent implements OnInit {
  loading: boolean = true;
  meetUp: Observable<Meetup | undefined>;
  update: boolean = false;
  id: string;
  updatedMeetup: any ;

  constructor(private meetupService: MeetupsService, private store: Store<State>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.meetUp = this.meetupService.retrieveOne(parseInt(params['id'], 10))
      this.meetUp.subscribe(meetup => {
        this.updatedMeetup = {...meetup, attributes: {...meetup?.attributes}}
      })
    });
  }

  updateMeetUp() {
    console.log(this.updatedMeetup)
    this.meetupService.updateMeetup(this.updatedMeetup)
    this.update = false;
  }


}
