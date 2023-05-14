import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input('name') name: string | undefined;


}
