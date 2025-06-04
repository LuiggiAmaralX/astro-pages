import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MainBackground } from '../main-background/main-background';

@Component( {
  selector: 'app-crud',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, Header, Footer, MainBackground ],
  templateUrl: './crud.html',
  styleUrl: './crud.css'
} )
export class Crud {
  taskForm = new FormGroup( {
    descricao: new FormControl( '', Validators.required ),
    dataVencimento: new FormControl( '', Validators.required ),
    status: new FormControl( '', Validators.required )
  } );

  taskFormError: string | null = null;

  constructor() { }

  onSubmit(): void {
    this.taskFormError = null;

    if ( this.taskForm.invalid ) {
      this.taskFormError = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    console.log( 'Dados do Formulário:', this.taskForm.value );
    alert( 'Tarefa adicionada com sucesso!' );
    this.taskForm.reset( {
      descricao: '',
      dataVencimento: '',
      status: ''
    } );
  }
}