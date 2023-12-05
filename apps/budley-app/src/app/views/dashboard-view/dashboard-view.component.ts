import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowsDashDispComponent } from '../../display/grows-dash-disp/grows-dash-disp.component';

@Component({
  selector: 'budley-dashboard-view',
  standalone: true,
  imports: [CommonModule, GrowsDashDispComponent],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
})
export class DashboardViewComponent {}
