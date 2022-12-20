import { Component, OnInit } from '@angular/core';
import { technologies } from '../models/techologies';

@Component({
  selector: 'app-structural-directive-assignment',
  templateUrl: './structural-directive-assignment.component.html',
  styleUrls: ['./structural-directive-assignment.component.css']
})
export class StructuralDirectiveAssignmentComponent implements OnInit {
  title :string ="Top 3 Techologies";
  technologies:technologies[]=[
    {id:1,name:'Angular',fee:40000,intake:50},
    {id:2,name:'React',fee:50000,intake:40},
    {id:3,name:'Java',fee:70000,intake:70}
  ]

  selectedCourse:string;
  constructor() { }

  ngOnInit() {
  }
  getCourseValue(value){
    console.log(value.target.value);
    this.selectedCourse=value.target.value;

    
  }
  

}
