import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipepractice',
  templateUrl: './pipepractice.component.html',
  styleUrls: ['./pipepractice.component.css']
})
export class PipepracticeComponent implements OnInit {

  title='Codemind Technology';
  todayDate=new Date();
  jsonval={name:'Alex',age:30,address:{a1:'Paris',a2:'France'}};
  months=['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec'];

  constructor() { }

  ngOnInit() {
  }

}
