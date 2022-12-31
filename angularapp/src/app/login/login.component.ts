import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private _route: Router, private _authService: AuthService) {}

  ngOnInit() {}
  checkuser(uname, passward) {
    var output = this._authService.checkUserNameandPassword(uname, passward);
    {
      if (output == true) {
        window.alert("Login successfully");
        this._route.navigate(["product"]);
      } else {
        window.alert("Invalid username and passward");
      }
    }
  }
  // if ((uname = "admin" && passward == "admin"))
  // {
  //   this._route.navigate(["product/laptop"]);
  // }
}
