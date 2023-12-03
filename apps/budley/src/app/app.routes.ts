import { Route } from '@angular/router';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';

export const appRoutes: Route[] = [
    { path: 'landing', redirectTo: '', pathMatch: 'full'},
    { path: '', component: LandingViewComponent },
    { path: 'landing', component: LandingViewComponent },
    { path: 'dashboard', component: DashboardViewComponent },
    { path: 'settings', component: SettingsViewComponent },

];
