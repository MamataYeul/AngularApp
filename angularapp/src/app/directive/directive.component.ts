import { Component, Input, OnInit } from '@angular/core';
import { mobile } from '../models/mobile';
import { Movie } from '../models/movies';
import { vegetable } from '../models/vegetable';
import { fruit } from '../models/fruit';

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
  title1:string="Top 5 Mobiles";
  mobile:mobile[]=[
    {mobileName:'Micromax Informatics',companyName:'Micromax',releaseDate:'4 Dec 2017',rating:3},
    {mobileName:'OPPO',companyName:'OPPO',releaseDate:'3 Feb 2020',rating:4},
    {mobileName:'Vivo',companyName:'Vivo',releaseDate:'7 Aug 2009',rating:5},
    {mobileName:'Realme',companyName:'Realme',releaseDate:'2 Oct 2019',rating:5},
    {mobileName:'Xioami',companyName:'Xioami',releaseDate:'8 July 2011',rating:3},
  ]
  vegetable:vegetable[]=[
    {name:'Tomato',color:'Red',perKg:20},
    {name:'Potato',color:'White',perKg:19},
    {name:'Spinach',color:'Green',perKg:35},
    {name:'Brinjal', color:'Violet/green',perKg:40}
  ]
  friut:fruit[]=[
    {name:'Grapes',taste:'sweet',price:27,location:'Nashik'},
    {name:'Orange',taste:'sweet',price:50,location:'Nagpur'},
    {name:'Apple',taste:'sweet',price:40,location:'Kashmir'},
    {name:'Strowberry',taste:'sweet',price:80,location:'Mahabaleswar'},
    {name:'Hapus',taste:'sweet',price:49,location:'Ratnagiri'}
  ]
  @Input() myinputMsg:string;
  @Input() empinputData:object;
  // @Input() employee:string;
  constructor() { }

  ngOnInit() {
    console.log('The Value Coming From Parent', this.myinputMsg);
    console.log('The Value coming from app component',this.empinputData);
    // console.log('The Value from parent component',this.employee);
    
    
  }

}
