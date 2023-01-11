import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-servicecard2',
  templateUrl: './servicecard2.component.html',
  styleUrls: ['./servicecard2.component.css']
})
export class Servicecard2Component implements OnInit {

  constructor(private _msgService:UtilityService) { }

  ngOnInit() {
  }
  btnClick(){
    // const msgService=new MessageService();
    // msgService.messageAlert();
    this._msgService.messageAlert();
  }

}
