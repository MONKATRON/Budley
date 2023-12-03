import { Route } from '@angular/router';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'landing', pathMatch: 'full'},
    { path: 'landing', component: LandingViewComponent },
    { path: 'dashboard', component: DashboardViewComponent },
    { path: 'settings', component: SettingsViewComponent },

];
