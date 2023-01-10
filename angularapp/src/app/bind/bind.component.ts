import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userName:string="Mamata";
  password:any="Mamata#1234"
  education:string='Bachelor of Engg.'
  OnClick(){
    this.userName= " ";
    this.password= " ";
    this.education=" ";
  }

}
