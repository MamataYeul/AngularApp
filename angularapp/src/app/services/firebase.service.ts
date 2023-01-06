import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FireBasePost } from '../models/firebasepost';

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  //endpoint url below is:
  url = "https://angular-crud-388e0-default-rtdb.firebaseio.com/";
  constructor(private _httpClient: HttpClient) {}
//    users = any[]=[
//   {id:'101',name:'Mamata',gender:'Female'},
//   {id:'102',name:'Mamata',gender:'Female'},
//   {id:'103',name:'Mamata',gender:'Female'}
// ]
  createPost() {
    let postData = {
      title: "This is angular 8 crud",
      content: "This is firebase crud operation with post",
    };
    return this._httpClient.post(this.url + "posts.json", postData);
  }
  createPostDataReactiveForm(FireBasePost:FireBasePost){
    return  this._httpClient.post(this.url+'posts.json',FireBasePost);
  }
  getPostDataFireBase(){
    return this._httpClient.get(this.url+'posts.json');
  }
}
