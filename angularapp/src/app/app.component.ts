import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public uid:number;
  title ='Angular Reactive Form';
  loginForm = new FormGroup({
    user: new FormControl(''),
    email: new FormControl(''),
  })
  loginUser(){
    console.log(this.loginForm.value);
    
  }
  
}
