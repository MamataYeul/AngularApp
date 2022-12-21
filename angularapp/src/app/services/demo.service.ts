import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class DemoService{
    apiURL='https://jsonplaceholder.typicode.com/';
    products=[
        {name:'Laptop',id:'101'},
        {name:'Mobile',id:'102'},
        {name:'TV',id:'103'}
    ]

    constructor(private http:HttpClient){}

    display(){
        alert('Subscribed successfully')
    }
    calculateAge(date){
        
    }
    //this method will give data of 10 users from jsonplaceholder fake api server
    getUserData(){
        let users='users'
        return this.http.get(this.apiURL+users);
    }
    getDataPosts(){
        let posts='posts';
        return this.http.get(this.apiURL+posts);
    }


}