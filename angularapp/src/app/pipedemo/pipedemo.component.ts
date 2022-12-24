import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  todaysDate=new Date();
  obser;
  price:number=90000;
  obj={id:'101',name:'Mamata'}
  constructor(private _utilityService:UtilityService) { 
    this.obser=this._utilityService.userName;
  }

  ngOnInit() {
  }

}
