import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  grid = 6

  constructor() {
  }

  ngOnInit(): void {
  }

  handleSize(event: any) {
    if (event.target.innerWidth < 700) {
      this.grid = 1
    } else {
      this.grid = 6
    }
  }
}
