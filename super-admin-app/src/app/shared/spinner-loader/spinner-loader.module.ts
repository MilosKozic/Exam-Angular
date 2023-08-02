import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerLoaderComponent } from './spinner-loader.component';

@NgModule({
    declarations: [
        SpinnerLoaderComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [SpinnerLoaderComponent],
    providers: []
})
export class SpinnerLoaderModule { }
