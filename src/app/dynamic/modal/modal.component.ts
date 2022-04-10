import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }
}
