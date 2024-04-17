import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'budley-camera-view',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './camera-view.component.html',
  styleUrl: './camera-view.component.scss',
})
export class CameraViewComponent {}
