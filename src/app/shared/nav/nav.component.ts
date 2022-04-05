import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  dt: string | undefined;

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
  }


  goTo() {
    //remove slash if you want to go to relative path
    this.router.navigate(['/home']);
  }

  goToFragQParams() {
    this.router.navigate(['/home'], {queryParams: {id: 4}, fragment: 'section1'});
  }

}
