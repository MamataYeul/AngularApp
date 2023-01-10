import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products=[
    {proimg:'assets/images/laptop1.jpg',name:'Laptop',id:'pro01',price:14000,prodNo:1},
    {proimg:'assets/images/mobile.png',name:'Mobile',id:'pro02',price:15000,prodNo:2},
    {proimg:'assets/images/tv.jpg',name:'TV',id:'pro03',price:22000,prodNo:3},
    {proimg:'assets/images/washingmachine.jpg',name:'Washimgmachine',id:'pro04',price:50000,prodNo:4},
    {proimg:'assets/images/led.png',name:'Samsung LED',id:'pro05',price:70000,prodNo:5}
  ]

  fruits=[
    {fruitimg:'assets/images/mango.jpg',no:1,id:'frt1',name:'mango',price:200,quality:'Good'},
    {fruitimg:'assets/images/pineapple.jpg',no:2,id:'frt2',name:'pineapple',price:400,quality:'Better'},
    {fruitimg:'assets/images/3.png',no:3,id:'frt3',name:'orange',price:200,quality:'Best'},
    {fruitimg:'assets/images/Banana.png',no:4,id:'frt4',name:'banana',price:500,quality:'Good'},
    {fruitimg:'assets/images/grapes.jpg',no:5,id:'frt5',name:'grapes',price:300,quality:'Better'},
    {fruitimg:'assets/images/melon.jpg',no:6,id:'frt6',name:'watermelon',price:600,quality:'Good'}
  ]
  users=[];
  name:string;
  uname:string;
  onCreateUser(uname){
    this.users.push({
      name:uname.value
    // name.uname.value,
    });
  }
  onRemoveUser(){
    this.users.splice(this.users.length-1);
  }
  OnRemoveItem(item){
    this.users.splice(item,1);
    
  }

}
