import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() {
  }

  id: number = 1;
  name: string = 'John';

  getName() {
    return this.name;
  }


  ngOnInit(): void {
  }

}
