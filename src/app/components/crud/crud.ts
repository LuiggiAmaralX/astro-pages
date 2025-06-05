import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // CommonModule já está aqui, ótimo para o @for
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MainBackground } from '../main-background/main-background';

interface Task {
  descricao: string;
  dataVencimento: string;
  status: string;
}

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
  taskList: Task[] = [];

  constructor() { }

  onSubmit(): void {
    this.taskFormError = null;

    if ( this.taskForm.invalid ) {
      this.taskFormError = 'Preencha todos os campos';
      return;
    }

    const novaTarefa: Task = {
      descricao: this.taskForm.value.descricao || '',
      dataVencimento: this.taskForm.value.dataVencimento || '',
      status: this.taskForm.value.status || ''
    };

    this.taskList.push( novaTarefa );

    this.taskForm.reset( {
      descricao: '',
      dataVencimento: '',
      status: ''
    } );
  }
}