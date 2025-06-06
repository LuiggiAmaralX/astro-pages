import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-loading',
  imports: [],
  standalone: true,
  templateUrl: './loading.html',
  styleUrl: './loading.css'
} )
export class Loading implements OnInit {

  loadingOn: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {
      this.loadingOn = false;
    }, 1000 );
  }

}
