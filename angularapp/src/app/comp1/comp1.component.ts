import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
userName;

  constructor(private _utilityService:UtilityService) { 
    this._utilityService.userName.subscribe(res=>{
      this.userName=res;
      console.log(res);
      
    })
  }
  ngOnInit() {
  }

  updateUserName(uname){
    let emp={
      name:'Dnyanesh',
      id:'101'
    }
    console.log(uname.value);
    //next method is used to send message to an observable i.e username
    // this._utilityService.userName.next(uname.value);
    this._utilityService.userName.next(JSON.stringify(emp));
  }

}
