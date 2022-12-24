import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-servicecard2',
  templateUrl: './servicecard2.component.html',
  styleUrls: ['./servicecard2.component.css']
})
export class Servicecard2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  btnClick(){
    const msgService=new MessageService();
    msgService.messageAlert();
  }

}
