import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-servicecard1',
  templateUrl: './servicecard1.component.html',
  styleUrls: ['./servicecard1.component.css']
})
export class Servicecard1Component implements OnInit {

  constructor(private _msgService:UtilityService) { }
  products={}
  employee={}
  ngOnInit() {
    // this.products=this._msgService.product;
    this._msgService.employee().subscribe(employeeData=>this.employee=employeeData)
    
  }
  btnClick(){
    // const msgService= new MessageService();
    // msgService.messageAlert();we can also message service like other service for our purpose
    this._msgService.messageAlert();
  }



}
