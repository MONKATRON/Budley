import { Route } from '@angular/router';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { GrowsViewComponent } from './views/grows-view/grows-view.component';
import { GrowViewComponent } from './views/grow-view/grow-view.component';
import { CameraViewComponent } from './views/camera-view/camera-view.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'landing', pathMatch: 'full'},
    { path: 'landing', component: LandingViewComponent },
    { path: 'dashboard', component: DashboardViewComponent },
    { path: 'grows', component: GrowsViewComponent },
    { path: 'grow', component: GrowViewComponent },
    { path: 'camera', component: CameraViewComponent },
    { path: 'settings', component: SettingsViewComponent },
];
