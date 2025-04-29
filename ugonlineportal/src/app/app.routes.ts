import { Routes } from '@angular/router';
import { LoginComponent } from './ugreusecomponents/login/login.component';
import { HomepagelayoutComponent } from './ugreusecomponents/homepagelayout/homepagelayout.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomepagelayoutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Empty path redirects to 'home'
    { path: '**', redirectTo: 'home' } // Any invalid path redirects to 'home'
];
