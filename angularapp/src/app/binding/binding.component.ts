import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
public name=" Mamata Vinayak Yeul" ;
public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Hello"+ this.name;
  }

}
