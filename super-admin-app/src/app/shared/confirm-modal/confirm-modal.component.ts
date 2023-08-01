import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent {
  @Input() title: string = 'Confirm';
  @Input() message: string = 'Are you sure?';
  @Input() confirmLabel: string = 'OK';
  @Input() cancelLabel: string = 'Cancel';
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();


  onConfirmClick(result: boolean) {
    this.confirm.emit(result);
  }
}
