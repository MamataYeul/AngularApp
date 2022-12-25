import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-servicecard1',
  templateUrl: './servicecard1.component.html',
  styleUrls: ['./servicecard1.component.css']
})
export class Servicecard1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  btnClick(){
    const msgService= new MessageService();
    msgService.messageAlert();
  }


}
