import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() {
  }

  id: number = 0;
  name: string = "hello";

  getName() {
    return this.name;
  }

  onClick() {
    this.name == "world" ? this.name = "hello" : this.name = "world";
  }

  setName(name: Event) {
    this.name = (<HTMLInputElement>name.target).value;
  }

  ngOnInit() {
  }
}
