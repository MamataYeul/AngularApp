import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
public name: string =" Mamata Vinayak Yeul" ;
public name1: string = "SevenMind Technology";
public serverId: number=4200;
public Id:number=32;
public ServerStatus: string= 'Online';
allowNewServer: boolean = false;
public imgUrl='https://cdn-icons-png.flaticon.com/512/5968/5968566.png';
imgUrl1='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201';
servercreationStatus: string= 'server not created';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true
    },5000)
  }

  ngOnInit() {
  }
  greetUser(){
    return "Hello"+ this.name;
  }
  greetUser1(){
    return " Hi I am  " + this.name1;
  }
  getServerStatus(){
    return this.ServerStatus;
  }
  onCreateServer(){
    this.servercreationStatus='Server Created'
  }


}
