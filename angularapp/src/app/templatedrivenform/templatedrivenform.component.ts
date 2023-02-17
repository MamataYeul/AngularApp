import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  submitted:boolean=false;
  // student=new Student();
  gender:string;
  topics=['Angular','React','Vue']
  constructor() { }

  ngOnInit() {

  }
  minDate:any='2023-01-05';
  getDate(){
    var date:any= new Date();// this step for todays date day and time also gives us as o/p
    var toDate:any= date.getDate();
    if(toDate<10){
      toDate='0'+toDate;
    }
    var month:any=date.getMonth()+1;
    if(month<10){
      month='0'+month;
    }
    var year=date.getFullYear();
    this.minDate=year+"-"+month+"-"+toDate;
    console.log(this.minDate);
  }
  OnSubmit(form:NgForm){
    this.submitted = true;
  
    form.reset();

  }
  OnReset(){
    
  }

}


