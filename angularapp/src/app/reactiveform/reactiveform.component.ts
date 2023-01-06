import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { interval, Observable } from "rxjs";
import { FilterPipe } from "../filter.pipe";
import { FireBasePost } from "../models/firebasepost";
import { FirebaseService } from "../services/firebase.service";
import { map } from 'rxjs/operators';


// import { FireBasePost } from "../models/firebasepost";

@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"],
})
export class ReactiveformComponent implements OnInit {
  submitted: boolean = false;
  notAllowedNames = ["codemind", "technology"];
  genders = [
    {
      id: "1",
      value: "Male",
    },
    {
      id: "2",
      value: "Female",
    },
  ];
  myReactiveForm: FormGroup;
  firebasePost: FireBasePost;
  constructor(private _fb:FormBuilder,private _firebaseService:FirebaseService) {
    //this.createForm();
    
    this.myReactiveForm = new FormGroup({
      userDatails: new FormGroup({
        username: new FormControl("", [
          Validators.required,
          this.NaNames.bind(this),
        ]),
        email: new FormControl(
          "",
          [Validators.required, Validators.email],
          this.NaEmails
        ),
      }),
      courses: new FormControl(""),
      gender: new FormControl(""),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  OnSubmit() {
    this.submitted = true;
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm["controls"].userDatails["controls"].username.value);

    this.firebasePost = new FireBasePost();
    this.firebasePost.username = this.myReactiveForm['controls'].userDetails['controls'].username.value
    this.firebasePost.email = this.myReactiveForm['controls'].userDatails['controls'].email.value;
    this.firebasePost.course = this.myReactiveForm['controls'].course.value;
    this.firebasePost.gender = this.myReactiveForm['controls'].gender.value;
    this.firebasePost.skill = this.myReactiveForm['controls'].gender.value;

    // console.log('firebase post class',this.firebasePost);
    this._firebaseService.createPostDataReactiveForm(this.firebasePost).subscribe(res=>{
      console.log('post from reactive form',res);  
    });
  }


  OnAddSkill() {
    (<FormArray>this.myReactiveForm.get("skills")).push(
      new FormControl(null, Validators.required)
    );
  }

  ngOnInit() {
    // const data = from(this._firebaseService.users);
    // data.pipe(map(x=>x.name + 'data').subscribe(res=>{
    //   console.log('res',res);
      
    // }))

    //filter

    // const data = from(this._firebaseService.users)

    // data.pipe(
    //   filter(u => u.gender == 'Female'),
    //   toArray()
    // ).subscribe(res=>{
    //   console.log('filter operator',res);
    // })

    //Take operator
    //const sourse= interval(1000);
    // sourse.pipe(
    //   take(5)).subscribe(res =>{
    //     console.log('interval example',res);
    //   })

    //Take last
    // let randomsName=['Mohini','Codemind','Angular','HTML','JavaScript','TypeScript'];
    // const sourse = from(randomsName);
    // sourse.pipe(
    //   takeLast(2)
    // ).subscribe(res=>{
    //   console.log('take last operator',res);
    // })
    


this._firebaseService.getPostDataFireBase().pipe(
  map(responseDate =>{
    //empty array
    const postArray =[];
    //for in loop
    for(const key in responseDate){
      //check key
      if(responseDate.hasOwnProperty(key)){
        //push new value in to array
        postArray.push({...responseDate[key],id:key})
      }
    }
  })
)

    // data.subscribe(res=>{
    //   console.log('example of from operator',res);
      
    // })
    // this._firebaseService.getPostDataFireBase().subscribe(res=>{
    //   console.log('getPostDataFirebase',res);
      
    // })
    // setTimeout(()=>{
    //   this.myReactiveForm.setValue({
    //     'userDetails':{
    //       'username':'Codemind1122',
    //       'email':'test@gmail.com'
    //     },
    //     'course':'HTML',
    //     'gender':'Male'
    //   })
    // },3500);

    setTimeout(() => {
      this.myReactiveForm.patchValue({
        userDetails: {
          username: "Codemind1122",
          email: "test@gmail.com",
        },
      });
    }, 3500);
  }
  createForm() {
    this.myReactiveForm = new FormGroup({
      userDatails: new FormGroup({
        username: new FormControl("", [
          Validators.required,
          this.NaNames.bind(this),
        ]),
        email: new FormControl(
          "",
          [Validators.required, Validators.email],
          this.NaEmails
        ),
      }),
      courses: new FormControl("Angular"),
      gender: new FormControl(""),
    });
  }
  // OnSubmit(){
  //   console.log(this.myReactiveForm);
  //   var selectedvalue="";

  // }

  NaNames(control: FormControl) {
    //this.notAllowedNames= api/getNames
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { namesNotAllowed: true };
    }
    return null;
  }
  NaEmails(control: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "codemindtechnology@gmail.com") {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return myResponse;
  }
}
