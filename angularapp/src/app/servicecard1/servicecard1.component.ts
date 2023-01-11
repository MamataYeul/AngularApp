import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-servicecard1',
  templateUrl: './servicecard1.component.html',
  styleUrls: ['./servicecard1.component.css']
})
export class Servicecard1Component implements OnInit {

  constructor(private _msgService:UtilityService) { }

  ngOnInit() {
  }
  btnClick(){
    // const msgService= new MessageService();
    // msgService.messageAlert();we can also message service like other service for our purpose
    this._msgService.messageAlert();
  }


}
