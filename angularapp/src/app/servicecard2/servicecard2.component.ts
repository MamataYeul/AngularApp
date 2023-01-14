import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-servicecard2',
  templateUrl: './servicecard2.component.html',
  styleUrls: ['./servicecard2.component.css']
})
export class Servicecard2Component implements OnInit {

  constructor(private _msgService:UtilityService) { }
  products={}
  ngOnInit() {

    // this.products=this._msgService.product;
    this._msgService.user().subscribe(userData=>this.products=userData)
  }
  btnClick(){
    // const msgService=new MessageService();
    // msgService.messageAlert();
    this._msgService.messageAlert();
  }
}
