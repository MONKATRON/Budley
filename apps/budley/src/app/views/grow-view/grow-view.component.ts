import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'budley-grow-view',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './grow-view.component.html',
  styleUrl: './grow-view.component.scss',
})
export class GrowViewComponent {}
