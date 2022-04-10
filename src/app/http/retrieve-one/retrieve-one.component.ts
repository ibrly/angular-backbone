import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-retrieve-one',
  templateUrl: './retrieve-one.component.html',
  styleUrls: ['./retrieve-one.component.scss']
})
export class RetrieveOneComponent implements OnInit {
  loading: boolean = true;
  meetUp: any;
  update: boolean = false;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') as string;
    this.http.retrieveMeetup(id).subscribe(data => {
      this.loading = false;
      this.meetUp = data['data'];
    });
  }

  updateMeetUp() {
    this.loading = true;
    console.log(this.meetUp);
    this.http.updateMeetup(this.meetUp.attributes, this.meetUp.id).subscribe(data => {
      this.meetUp = data['data'];
      this.update = false;
      this.loading = false;
    });
  }


}
