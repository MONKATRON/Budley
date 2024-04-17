import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSliderModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSliderModule,
    MatInputModule
  ]
})
export class MaterialModule { 
  
}
