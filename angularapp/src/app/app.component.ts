import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName} from '@angular/forms'
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit{
  constructor (private _demoService:DemoService){

  }
  ngOnInit(): void {
    this._demoService.getUserData().subscribe(data=>{
      console.log('AppComponent',data);
      
    });

    this._demoService.getDataPosts().subscribe(results=>{
      console.log('posts',results);
    })
    
    
  }
  public uid:number;
  title ='Angular Reactive Form';
  uname:string='I am from app component';
  EmployeeRecords:any=[
    {
      eName:'Sejal', eCity:'Amravati',eSalary:'200000'
    },
    {
      eName:'Mamata',eCity:'Nanded',eSalary:'400000'
    }

  ]
  food:string[]=[];
  getDataFromChild(value){
    console.log(value);
    this.food.push(value);
  }
  emp_obj:any=[{
    emp_id:1,
    emp_name:'Mamata',
    emp_profile:'UI Developer',
    emp_company:'TCS',
    emp_salary:40000
  }]
  loginForm = new FormGroup({
    user: new FormControl(''),
    email: new FormControl(''),
  })
  loginUser(){
    console.log(this.loginForm.value);
    
  }
  
}
