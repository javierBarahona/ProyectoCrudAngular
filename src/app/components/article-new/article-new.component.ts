import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers:[ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public user: any;
  public article: Article;
  public status: string;
  public page_title: string;

  constructor(

    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) { 
    this.article = new Article('','','',null,null);
    this.page_title = 'Crear articulo';
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;

          //alerta
          swal(
            'Articulo creado!!',
            'El articulo ha sido creado correctamente',
            'succes'
          );

          this._router.navigate(['/blog']);
        }else{
          this.status="error";
        }
      }, 
      error => {
        console.log(error);
      }
    );
  }
}
