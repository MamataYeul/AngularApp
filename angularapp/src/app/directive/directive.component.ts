import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  isShow:boolean=true;
  title :string ="Top 3 Movies";
  movies:Movie[]=[
    {title:'3 Idiots',director:'rajKumar',cast:'Amir',releaseDate:'2007'},
    {title:"Kantara",director:'Rishab',cast:'Rishab',releaseDate:'2022'},
    {title:'KGF',director:'RockyBhai',cast:'Yash Agrawal',releaseDate:'2019'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
