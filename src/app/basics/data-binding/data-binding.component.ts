import {Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {


  id: number = 1;
  name: string = 'John';

  getName() {
    return this.name;
  }


}
