import {Component, OnInit} from '@angular/core';
import {AnimationsAnimation} from "./animations.animations";

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [AnimationsAnimation],

})
export class AnimationsComponent implements OnInit {
  fadeInOut: string = 'in';
  list: number[] = [1,
    2,
    3,
    4]

  constructor() {
  }

  ngOnInit(): void {
  }

  addToList() {
    this.list.push(this.list.length + 1);
  }

  removeFromList() {
    this.list.pop();
  }

  changeState() {
    this.fadeInOut = this.fadeInOut === 'in' ? 'out' : 'in';
  }

  halfState() {
    this.fadeInOut = 'half';
  }
}
