import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type = 'button'
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() style = "primary" || "secondary" || "successs" || "danger";
  @Input() isDisabled!: boolean;

  handleClick() {
    this.onClick.emit()
  }

  getButtonClass() {
    switch (this.style) {
      case 'primary':
        return 'primary-button';
      case 'secondary':
        return 'secondary-button';
      case 'success':
        return 'success-button';
      case 'danger':
        return 'danger-button';
      default:
        return 'primary-button'; 
    }
  }
}
