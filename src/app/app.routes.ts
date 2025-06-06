import { Router, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { MainBackground } from './components/main-background/main-background';
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
    path: "main-background",
    component: MainBackground,
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


