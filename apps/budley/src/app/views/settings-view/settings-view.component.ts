import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'budley-settings-view',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './settings-view.component.html',
  styleUrl: './settings-view.component.scss',
})
export class SettingsViewComponent {}
