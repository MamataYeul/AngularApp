import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  productArr=[
    {
      sno:1,
      name:'Mobile',
      price:20000,
      availability:'Available'
    },
    {
      sno:2,
      name:'Television',
      price:30000,
      availability:'Available'
    },
    {
      sno:3,
      name:'Television(Onida)',
      price:20000,
      availability:'Available'
    },
    {
      sno:4,
      name:'Television(Sunsui)',
      price:25500,
      availability:'Available'
    },
    {
      sno:5,
      name:'Washing Machine',
      price:50000,
      availability:'Available'
    },
    {
      sno:6,
      name:'Mobile(Samsung)',
      price:11000,
      availability:'Available'
    },
    {
      sno:7,
      name:'Television(Sony)',
      price:60000,
      availability:'Not Available'
    },
    {
      sno:8,
      name:'Laptop(HP)',
      price:30000,
      availability:'Available'
    },
    {
      sno:9,
      name:'Laptop(Lenovo)',
      price:25000,
      availability:'Not Available'
    },
    {
      sno:10,
      name:'Mobile(Xiomi)',
      price:25000,
      availability:'Available'
    }
  ]
  onAddProduct(add){
    this.productArr.push(    {
      sno:11,
      name:add.value,
      price:25000,
      availability:'Available'
    })

  }

}
