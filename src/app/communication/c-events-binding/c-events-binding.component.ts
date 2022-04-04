import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-c-events-binding',
  templateUrl: './c-events-binding.component.html',
  styleUrls: ['./c-events-binding.component.scss']
})
export class CEventsBindingComponent implements OnInit {
  data: string | undefined;
  constructor() {
  }


  onDataReceived(data: string) {
    this.data = data;
  }

  ngOnInit(): void {
  }

}
