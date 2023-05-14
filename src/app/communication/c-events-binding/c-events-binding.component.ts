import {Component} from '@angular/core';

@Component({
  selector: 'app-c-events-binding',
  templateUrl: './c-events-binding.component.html',
})
export class CEventsBindingComponent {
  data: string | undefined;


  onDataReceived(data: string) {
    this.data = data;
  }


}
