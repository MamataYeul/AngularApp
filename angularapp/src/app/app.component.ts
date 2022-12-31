import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormControlName } from "@angular/forms";
import { Product } from "./models/product";
import { DemoService } from "./services/demo.service";
import { PostService } from "./services/post.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  constructor(private _demoService:DemoService,private _postServices:PostService){

  }
  data;
  name: string;
  price: number;
  product:Product=new Product();
  public uid: number;
  title = "Angular Batch 4";
  uname: string = "I am from app component";
  EmployeeRecords: any = [
    {
      eName: "Sejal",
      eCity: "Amravati",
      eSalary: "200000",
    },
    {
      eName: "Mamata",
      eCity: "Nanded",
      eSalary: "400000",
    },
  ];
  food: string[] = [];

  ngOnInit(): void {
    this._demoService.getUserData().subscribe((data) => {
      console.log("AppComponent", data);
    });

    this._demoService.getDataPosts().subscribe((results) => {
      console.log("posts", results);
    });
  }

  getDataFromChild(value) {
    console.log(value);
    this.food.push(value);
  }
  handleData(value) {
    this.data = value.target.value;
  }
  updateProduct(){
    this.product = new Product();
    this.product.name=this.name;
    this.product.price=this.price;
  }
  emp_obj: any = [
    {
      emp_id: 1,
      emp_name: "Mamata",
      emp_profile: "UI Developer",
      emp_company: "TCS",
      emp_salary: 40000,
    },
  ];
  loginForm = new FormGroup({
    user: new FormControl(""),
    email: new FormControl(""),
  });
  loginUser() {
    console.log(this.loginForm.value);
  }
  DeletePost(){
    this._postServices.deletePostById(1).subscribe(res=>{
      console.log(res);
      
    })
  }
}
