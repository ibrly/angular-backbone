import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Meetup} from "../models/Meetup";
import {MeetupsService} from "../meetups.service";
import {retrieveAnimations} from "./retrieve.animations";

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss'],
  animations: retrieveAnimations
})
export class RetrieveComponent implements OnInit {
  meetups$: Observable<Meetup[]>;

  constructor(private meetupsService: MeetupsService) {
  }

  ngOnInit(): void {
    this.meetups$ = this.meetupsService.retrieveMeetups()
  }

  onDelete(id: number) {
    this.meetupsService.deleteMeetup(id)
  }
}
