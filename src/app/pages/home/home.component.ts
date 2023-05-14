import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  grid = 6


  handleSize(event: any) {
    if (event.target.innerWidth < 700) {
      this.grid = 1
    } else {
      this.grid = 6
    }
  }
}
