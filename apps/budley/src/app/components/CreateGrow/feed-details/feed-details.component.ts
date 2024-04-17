import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'budley-feed-details',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './feed-details.component.html',
  styleUrl: './feed-details.component.scss',
})
export class FeedDetailsComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
