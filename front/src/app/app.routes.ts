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
        path: 'articles',
        loadComponent: () => import('./pages/articles/articles').then(m => m.Articles)
    },
    {
        path: 'articles/new',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/create-post/create-post').then(m => m.CreatePost)
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
