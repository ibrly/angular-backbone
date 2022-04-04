import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-childo',
  templateUrl: './childo.component.html',
  styleUrls: ['./childo.component.scss']
})
export class ChildoComponent implements OnInit {
  @Output() dataSent = new EventEmitter<string>();

  constructor() {
  }

  onDataSent(data: string) {
    this.dataSent.emit(data);
  }

  ngOnInit(): void {
  }

}
