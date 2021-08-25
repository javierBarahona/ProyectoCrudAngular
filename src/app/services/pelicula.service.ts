import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("spiderman", 2019, "https://dam.smashmexico.com.mx/wp-content/uploads/2018/09/26165403/spidermantop10_portada.jpg"),
            new Pelicula("superman", 2018, "https://i.blogs.es/c304e7/superman/1366_2000.jpg"),
            new Pelicula("justice leage", 2021, "https://as.com/meristation/imagenes/2021/01/29/noticias/1611929945_725616_1611930136_noticia_normal_recorte1.jpg"),
            new Pelicula("CR7", 2015, "https://depor.com/resizer/UezqKdcbI1BmBigz21yOyPuMBQE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4O7CBWJARZEV3DQ66RJR7BCAVY.jpg")
          ];
    }

    holaMundo(){
        return 'Hola mundo estoy desde un servicio de angular';
    }

    getPelicula(){
        return this.peliculas;
    }
}