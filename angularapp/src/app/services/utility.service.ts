import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UtilityService{
    //username=new Subject<any>();
   userName=new BehaviorSubject('Angular UI Developer');
   emp_obj={
    emp_id:1,
    emp_name:'Mamata',
    emp_profile:'DevOps',
    emp_salary:40000,
    emp_company:'Wipro'
   }
   constructor(){} 
   messageAlert(){
    alert("Thanks for subscribe.")
   }

}