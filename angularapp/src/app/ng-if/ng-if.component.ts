import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isValid:boolean=false;
  onCreateBlock(){
    this.isValid=true;
  }

  selectedProduct:string;
  getProductVal(value){
    console.log(value.target.value);
    this.selectedProduct=value.target.value;
    
  }
}
