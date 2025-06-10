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
    component: Login,
  },
  {
    path: "crud",
    component: Crud,
  },
  {
    path: "loading",
    component: Loading,
  },
  {
    path: '**',
    redirectTo: '',
  }
];


