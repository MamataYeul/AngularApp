import { Component, OnInit } from '@angular/core';
import {RapidapiService} from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  constructor(private _rapidAPIService:RapidapiService) { }

  ngOnInit() {
    this._rapidAPIService.getDataBBFinance().subscribe(res=>{
      console.log('rapid finance data',res);
      
    })
  }

}
