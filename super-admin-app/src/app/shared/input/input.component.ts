import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector:'app-input',
  templateUrl:'./input.component.html',
  styleUrls:['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  // @Input() showErrors: boolean = true;

  ngOnInit() {
    if (!this.control) {
      throw new Error('FormControl is required for CustomInputComponent.');
    }
  }

}