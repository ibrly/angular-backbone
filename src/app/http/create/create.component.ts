import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const {title, description, address, image} = form.value
    this.http.createMeetup({
      title,
      description,
      address,
      image
    }).subscribe(data => {
      console.log(data
      )
    })
  }
}
