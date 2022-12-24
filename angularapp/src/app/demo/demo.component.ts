import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
    // @Input() employee:any;
    //@output decorator is custom event
  @Output() foodevent:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
      // console.log('The Value from parent component',this.employee);
  }

  //function will call once user enter value in text box
  addtofood(value){
    //foodevent is nothing but a custom event
    this.foodevent.emit()
    
  }

}
