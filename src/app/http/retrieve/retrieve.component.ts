import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})
export class RetrieveComponent implements OnInit {
  meetups: Array<{ id: number, attributes: { title: string, description: string, address: string, image: string } }>;

  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
    this.http.retrieveMeetups().subscribe(data => {
      this.meetups = data;
    });
  }

  onDelete(id: number) {
    this.http.deleteMeetup(id).subscribe(data => {
      this.http.retrieveMeetups().subscribe(data => {
        this.meetups = data;
      });
    });
  }


}
