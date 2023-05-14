import {Component} from '@angular/core';
import {AnimationsAnimation} from "./animations.animations";

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  animations: [AnimationsAnimation],

})
export class AnimationsComponent {
  fadeInOut: string = 'in';
  list: number[] = [1,
    2,
    3,
    4]


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
