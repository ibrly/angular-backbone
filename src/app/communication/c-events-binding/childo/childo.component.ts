import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-childo',
  templateUrl: './childo.component.html',
  styleUrls: ['./childo.component.scss']
})
export class ChildoComponent {
  @Output() dataSent = new EventEmitter<string>();


  onDataSent(data: string) {
    this.dataSent.emit(data);
  }


}
