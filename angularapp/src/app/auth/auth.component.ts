import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService,AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){

    if(!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs : Observable<AuthResponseData>;
    if(this.isLoginMode)
    {
      ///
      console.log('sign in ')
    } else {

      this.authService.signup(email, password).subscribe(res => {
        console.log(res)
      })
      //console.log('sign up ')
    }
  }
}
