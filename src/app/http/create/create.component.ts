import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpService} from "../http.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  loading: boolean = false;
  error:string;

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.loading = true;
    const {title, description, address, image} = form.value
    this.http.createMeetup({
      title,
      description,
      address,
      image
    }).subscribe(data => {
      this.loading = false;
      console.log(data
      )
    }, error => {
      this.loading = false;
      this.error = error.error.error.message
    })
  }
}
