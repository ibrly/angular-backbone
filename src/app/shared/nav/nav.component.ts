import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private router: Router) {
  }

  dt: string | undefined;


  goTo() {
    //remove slash if you want to go to relative path
    this.router.navigate(['/home']);
  }

  goToFragQParams() {
    this.router.navigate(['/home'], {queryParams: {id: 4}, fragment: 'section1'});
  }

}
