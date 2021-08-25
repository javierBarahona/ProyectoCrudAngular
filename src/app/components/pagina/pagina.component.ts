import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css'],
  providers: [PeliculaService]
})
export class PaginaComponent implements OnInit {

  public nombre: String;
  public peliculas: Pelicula[];
  public favorita: Pelicula;

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _peliculaService: PeliculaService  
  ) { 
    this.peliculas = this._peliculaService.getPelicula();
    
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
    });
  }

  redireccion(){
    this._router.navigate(['/formulario']);
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
