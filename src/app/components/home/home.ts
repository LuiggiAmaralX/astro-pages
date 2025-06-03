import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { Footer } from '../footer/footer';

@Component( {
  selector: 'app-home',
  standalone: true,
  imports: [ Header, NgOptimizedImage, BtnPrimary, Footer ],
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
} )
export class Home {

}
