import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'budley-light-details',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './light-details.component.html',
  styleUrl: './light-details.component.scss',
})
export class LightDetailsComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}

