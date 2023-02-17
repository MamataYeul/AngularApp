import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

arrPosts:Post[]=[];
  constructor(private _postservice:PostService) { }

  ngOnInit() {
    this._postservice.getPosts().subscribe(res=>{
      this.arrPosts =res;
      // console.log('My name is Mamata',this.arrPosts); //If i want the data in html page then what i can do.
    })
  }

}
