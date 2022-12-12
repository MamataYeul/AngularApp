import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"],
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit() {}
  createForm(){
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required)
    })
  }
  OnSubmit(){
    console.log(this.myReactiveForm);
    
  }
}
