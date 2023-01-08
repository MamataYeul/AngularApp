import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  submitted:boolean=false;
  // student=new Student();
  gender:string;
  genders = [
    {id:'1', value:'Male'},
    {id:'2', value:'Female'}
  ]
  
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
    // this.student.name=form.value.name;
    // this.student.email = form.value.email;
    // this.student.dob = form.value.userDetails.dob;
    // this.student.mobile = form.value.userDetails.mobile;
    // this.student.gender = form.value.gender;
    // this.student.department=form.value.department;
    // this.student.course=form.value.course;
    // this.student.city=form.value.city;
    // this.student.state=form.value.state;
    // this.student.country=form.value.country;
    // this.student.pin=form.value.pin;

    form.reset();

  }
  OnReset(){
    
  }

}


