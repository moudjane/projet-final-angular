import { Routes } from '@angular/router';
import { guestGuard } from './core/guards/guest-guard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'login',
        canActivate: [guestGuard],
        loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        canActivate: [guestGuard],
        loadComponent: () => import('./pages/register/register').then(m => m.Register)
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
