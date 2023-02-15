import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPlaceComponent } from './new-place.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewPlaceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NewPlaceComponent
  ]
})
export class NewPlaceModule { }
