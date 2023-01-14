import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UtilityService{
    // username=new Subject<any>();
   userName=new BehaviorSubject('Angular UI Developer');
   emp_obj={
    emp_id:1,
    emp_name:'Mamata',
    emp_profile:'DevOps',
    emp_salary:40000,
    emp_company:'Wipro'
   }
   constructor(private http:HttpClient){} 
   messageAlert(){
    alert("Thanks for subscribe.")
   }
//    product=[
//     {name:"Mobile", id:"101"},
//     {name:"Television", id:"102"},
//     {name:"LED", id:"103"},
//     {name:"Notebook", id:"105"}
//    ]

url1="https://jsonplaceholder.typicode.com/users";
url2="https://jsonplaceholder.typicode.com/todos";
url3='https://jsonplaceholder.typicode.com/albums';
url4="https://jsonplaceholder.typicode.com/photos";
user():Observable<any>{
    return this.http.get(this.url1);

}
employee():Observable<any>{
    return this.http.get(this.url2);
}

  
}