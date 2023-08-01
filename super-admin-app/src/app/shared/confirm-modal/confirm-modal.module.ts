import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './confirm-modal.component';

@NgModule({
    declarations: [
        ConfirmModalComponent
    ],
    imports: [],
    exports:[ConfirmModalComponent],
    providers: []
})
export class ConfirmModule { }
