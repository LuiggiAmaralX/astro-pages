import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Home } from '../home/home';

@Component( {
  selector: 'app-login',
  standalone: true,
  imports: [ Header, Footer, ReactiveFormsModule, RouterModule ],
  templateUrl: './login.html',
  styleUrl: './login.css'
} )
export class Login {

}
