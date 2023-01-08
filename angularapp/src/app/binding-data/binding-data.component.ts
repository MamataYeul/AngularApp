import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html',
  styleUrls: ['./binding-data.component.css']
})
export class BindingDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dyname:string='Mamata';
  myMethod(){
    return 'My study work flow starts from binding concept' +" :- "+this.dyname;
  }
  appStatus:boolean=true;
  status1='Online';
  status2='Ofline';
  enable:boolean=false;
  mypro:boolean=false;
  myStyle1:string='15px'
  isActive:boolean=false;
  mltclasses={
    class1:true,
    class2:true,
    class3:true
  }
  mltStyle={
    'background':'red',
    'border':'10px solid green'
}
msg:string= "";
onAddCart(){
  this.msg="Product Added in Cart";
}
onInputClick(event){
  console.log(event.target.value);
  

}



}
