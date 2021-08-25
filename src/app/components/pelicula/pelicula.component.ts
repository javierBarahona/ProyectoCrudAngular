import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'pelicula-component',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
  providers: [PeliculaService]
})

export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() MarcaFavorita = new EventEmitter();

  constructor(
    private _peliculaService: PeliculaService
  ) { }

  ngOnInit() {
    console.log(this._peliculaService.holaMundo());
  }

  seleccionar(event, pelicula){
    this.MarcaFavorita.emit({
      pelicula: pelicula
    });

  }
}
