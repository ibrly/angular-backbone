import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() message: string;
  @Output() clicked = new EventEmitter<void>();


  onClose() {
    this.clicked.emit();
  }
}
