import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-component', //this is same as css selectors except for the id and pseudo selectors like :hover
  template: `<p>inline template component</p>`,
  styles: [`p {
    color: red;
  }`]
})
export class InlineComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
