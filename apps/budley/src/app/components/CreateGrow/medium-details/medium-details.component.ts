import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'budley-medium-details',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './medium-details.component.html',
  styleUrl: './medium-details.component.scss',
})
export class MediumDetailsComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}