import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
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

  constructor(private store: Store<State>) {
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
