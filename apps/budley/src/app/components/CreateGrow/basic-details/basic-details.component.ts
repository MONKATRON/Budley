import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'budley-basic-details',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './basic-details.component.html',
  styleUrl: './basic-details.component.scss',
})

export class BasicDetailsComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit() {}
}
