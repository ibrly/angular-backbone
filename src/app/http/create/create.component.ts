import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpService} from "../http.service";
import {Subject} from "rxjs";
import {State} from "../../store/reducers";
import {Store} from "@ngrx/store";
import {startCreateMeetup} from "../../store/reducers/meetup/actions/meetups.actions";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  loading: boolean = false;
  error: string;

  constructor(private store: Store<State>, private http: HttpService) {
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.loading = true;
    const {title, description, address, image} = form.value
    let meetup = {
      title,
      description,
      address,
      image
    }
    this.store.dispatch(startCreateMeetup({meetup}))

  }
}
