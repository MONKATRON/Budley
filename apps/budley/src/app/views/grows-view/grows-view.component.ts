import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'budley-grows-view',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './grows-view.component.html',
  styleUrl: './grows-view.component.scss',
})
export class GrowsViewComponent {}
