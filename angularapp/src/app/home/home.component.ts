import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  statusOnline:boolean=false;
  products=[
    {name:'Laptop'},
    {name:'Mobile'},
    {name:'TV'},
    {name:'Washing Machine'}
  ]

}
