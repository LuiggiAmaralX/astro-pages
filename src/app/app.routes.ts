import { Router, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Crud } from './components/crud/crud';
import { Loading } from './components/loading/loading';

export const routes: Routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "login",
    loadComponent: () => import( './pages/login/login' ).then( ( m ) => m.Login ),
  },
  {
    path: "crud",
    loadComponent: () => import( './components/crud/crud' ).then( ( m ) => m.Crud ),
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


