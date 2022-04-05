import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss']
})
export class TdComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('you submitted value:', form);
  }
}
