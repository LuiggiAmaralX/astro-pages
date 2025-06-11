import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import( './pages/home/home' ).then( ( m ) => m.Home ),
  },
  {
    path: "login",
    loadComponent: () => import( './pages/login/login' ).then( ( m ) => m.Login ),
  },
  {
    path: "crud",
    loadComponent: () => import( './pages/crud/crud' ).then( ( m ) => m.Crud ),
  },
  {
    path: "loading",
    loadComponent: () => import( './components/loading/loading' ).then( ( m ) => m.Loading ),
  },
  {
    path: '**',
    redirectTo: '',
  }
];


