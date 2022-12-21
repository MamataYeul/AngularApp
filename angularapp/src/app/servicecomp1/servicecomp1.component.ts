import { Component, OnInit } from '@angular/core';
import{DemoService} from '../services/demo.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {
//My Servicecomp1component is depend on my Demoservice.
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    // this.productss=this._demoService.products;
  }
  OnSubscribe(){
    // alert('servicecomp1 subscribed')
    this._demoService.display();

  }

}
