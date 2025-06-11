import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Loading } from '../../components/loading/loading';

interface Task {
  descricao: string;
  dataVencimento: string;
  status: string;
}

@Component( {
  selector: 'app-crud',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, Header, Footer, Loading ],
  templateUrl: './crud.html',
  styleUrl: './crud.css'
} )

export class Crud implements OnInit {

  constructor() { }

  taskForm = new FormGroup( {
    descricao: new FormControl( '', Validators.required ),
    dataVencimento: new FormControl( '', Validators.required ),
    status: new FormControl( '', Validators.required )
  } );

  taskFormError: string | null = null;
  taskList: Task[] = []; //

  onSubmit(): void {
    this.taskFormError = null;

    if ( this.taskForm.invalid ) {
      this.taskFormError = 'Preencha todos os campos'; //
      return;
    }

    const novaTarefa: Task = {
      descricao: this.taskForm.value.descricao || '',
      dataVencimento: this.taskForm.value.dataVencimento || '',
      status: this.taskForm.value.status || ''
    };

    this.taskList.push( novaTarefa ); //

    this.taskForm.reset( { //
      descricao: '',
      dataVencimento: '',
      status: ''
    } );
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  deleteTask( indexToDelete: number ) {
    if ( indexToDelete >= 0 && indexToDelete < this.taskList.length ) {
      this.taskList.splice( indexToDelete, 1 );
      console.log( 'Tarefa excluída', this.taskList );

    } else {
      console.error( 'Índice inválido', indexToDelete );
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  loadingOn: boolean = true;

  ngOnInit(): void {
    setTimeout( () => {
      this.loadingOn = false;
    }, 1500 );
  }
}