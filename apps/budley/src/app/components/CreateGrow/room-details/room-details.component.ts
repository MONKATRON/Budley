import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'budley-room-details',
  standalone: true,
  imports: [ 
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss',
})
export class RoomDetailsComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
