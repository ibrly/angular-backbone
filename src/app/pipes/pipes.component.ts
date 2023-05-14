import {Component} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
  name: string = 'Angular';
  today: Date = new Date();


}
