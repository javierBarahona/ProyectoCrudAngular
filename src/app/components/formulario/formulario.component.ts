import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() { 
    this.user = {
      nombre: '',
      apellido: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    alert('informacion enviada');
    console.log(this.user);
  }

  hasDadoClick(){
    alert('has dado click');
  }

  hasSalido(){
    alert('has dado enter');
  }
}
