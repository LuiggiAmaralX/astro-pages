import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../../components/btn-primary/btn-primary';
import { Footer } from '../../components/footer/footer';
import { Router } from '@angular/router';
import { Loading } from '../../components/loading/loading';

@Component( {
  selector: 'app-home',
  standalone: true,
  imports: [ Header, NgOptimizedImage, BtnPrimary, Footer, Loading ],
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
} )
export class Home {

  constructor( private router: Router ) { }

  loginPage() {
    this.router.navigate( [ "login" ] )
  }

}
