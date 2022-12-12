import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})
export class AttriComponent implements OnInit {
colorVal= 'blue';
people:any[] = [
  {
    'name':"Jack",
    'country':"USA"
  },
  {
    'name':"Sumit",
    'country':"UK"
  },
  {
    'name':'Anup',
    'country':"HK"
  },
  {
    'name':'Codemind',
    'country':'UK'
  },
  {
    "name": "Surya",
    "country": "USA"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
