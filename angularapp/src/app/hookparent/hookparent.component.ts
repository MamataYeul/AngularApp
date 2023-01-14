import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hookparent',
  templateUrl: './hookparent.component.html',
  styleUrls: ['./hookparent.component.css']
})
export class HookparentComponent implements OnInit {

  userName:string='Maria';
 
  constructor() { }

  updateUser(){
    this.userName='Chris';

  }
  ngOnInit() {
    console.log('ngOnInit from the parent component'); 
  }
  isChildDestroyed=false;
  destroy(){
    this.isChildDestroyed=true;
  }

}
