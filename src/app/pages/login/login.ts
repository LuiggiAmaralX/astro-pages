import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Loading } from '../../components/loading/loading';

@Component( {
  selector: 'app-login',
  standalone: true,
  imports: [ Header, Footer, ReactiveFormsModule, RouterModule, CommonModule, Loading ],
  templateUrl: './login.html',
  styleUrl: './login.css'
} )
export class Login implements OnInit {

  constructor( private router: Router ) { }

  loginForm = new FormGroup( {
    email: new FormControl( '', Validators.required ),
    password: new FormControl( '', Validators.required )
  } )

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

  //////////////////////////////////////////////////////////////////////

  loadingOn: boolean = true;

  ngOnInit(): void {
    setTimeout( () => {
      this.loadingOn = false;
    }, 1500 );
  }

}



