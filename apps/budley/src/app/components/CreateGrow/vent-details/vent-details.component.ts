import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'budley-vent-details',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './vent-details.component.html',
  styleUrl: './vent-details.component.scss',
})
export class VentDetailsComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}