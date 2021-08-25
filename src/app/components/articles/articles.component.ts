import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'articles-component',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public url: String; 

  constructor(){ 
    this.url = Global.url;
  }

  @Input() articles: Article[];

  ngOnInit(): void {
    console.log(this.articles);
  }

}
