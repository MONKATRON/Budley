import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'budley-strain-details',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './strain-details.component.html',
  styleUrl: './strain-details.component.scss',
})

export class StrainDetailsComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() {}

  ngOnInit() {}
}
