import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-retrieve-one',
  templateUrl: './retrieve-one.component.html',
  styleUrls: ['./retrieve-one.component.scss']
})
export class RetrieveOneComponent implements OnInit {
  meetUp: any;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.http.retrieveMeetup(id).subscribe(data => {
      this.meetUp = data['data'];
    });
  }

}
