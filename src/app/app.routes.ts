import { Router, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { MainBackground } from './components/main-background/main-background';

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
    path: "main-background",
    component: MainBackground,
  }
];


