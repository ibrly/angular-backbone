import {Component} from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
})
export class IfComponent {


  condition = true;

  setCondition() {
    this.condition = !this.condition;
  }

}
