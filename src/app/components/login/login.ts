import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainBackground } from '../main-background/main-background';

@Component( {
  selector: 'app-login',
  standalone: true,
  imports: [ Header, Footer, ReactiveFormsModule, RouterModule, CommonModule ],
  templateUrl: './login.html',
  styleUrl: './login.css'
} )
export class Login {

  loginForm = new FormGroup( {
    email: new FormControl( '', Validators.required ),
    password: new FormControl( '', Validators.required )
  } )

  constructor( private router: Router ) { }

  loginError: string | null = null;

  onSubmit() {
    if ( this.loginForm.invalid ) {
      this.loginError = 'Preencha todos os campos';
      return
    }

    const { email, password } = this.loginForm.value;

    if ( email === 'teste@gmail.com' && password === '12340' ) {
      this.loginError = null
      this.router.navigate( [ 'crud' ] )
      return
    }
    else {
      this.loginError = "dados inválidos"
    }
  }
}



