import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
name:string='Codemind Technology';
serverId : number=37;
serverStatus : string ='Online';
allowNewServer = false;
imgUrl= 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201';
serverCreationStatus: string= 'server not created';
serverName: string= "Codemind.com"
userName : string="Mamata"

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true
    },5000)
  }
  getServerStatus(){
    return this.serverStatus;
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server created';
  }
  ClearFields(){
    this.userName="";

  }

  






  ngOnInit() {
    //api/geDetails
    //id , name, status
  }

}
