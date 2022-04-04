import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {

  constructor() {
  }

  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {
  }

}
