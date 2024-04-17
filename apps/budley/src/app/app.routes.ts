import { Route } from '@angular/router';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { GrowsViewComponent } from './views/grows-view/grows-view.component';
import { GrowWizzardComponent } from './components/CreateGrow/grow-wizzard/grow-wizzard.component';
import { GrowViewComponent } from './views/grow-view/grow-view.component';
import { CameraViewComponent } from './views/camera-view/camera-view.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';
import { ListGrowsComponent } from './components/ListGrows/list-grows/list-grows.component';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'landing', pathMatch: 'full'},
    { path: 'landing', component: LandingViewComponent },
    { path: 'dashboard', component: DashboardViewComponent, children:[
        { path: '', component: ListGrowsComponent },
        { path: 'grow_wizzard', component: GrowWizzardComponent },
        { path: 'grow/:id', component: GrowViewComponent },
    ]},
    { path: 'grows', component: GrowsViewComponent },
    // { path: 'grow_wizzard', component: GrowWizzardComponent },
    // { path: 'camera', component: CameraViewComponent },
    { path: 'settings', component: SettingsViewComponent },
];
