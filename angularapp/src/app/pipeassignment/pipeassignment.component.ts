import { Component, OnInit } from '@angular/core';
import { Observable,Observer } from 'rxjs';

@Component({
  selector: 'app-pipeassignment',
  templateUrl: './pipeassignment.component.html',
  styleUrls: ['./pipeassignment.component.css']
})
export class PipeassignmentComponent implements OnInit {
  presentDate=new Date();
  timeChange=new Observable<string>((observer:Observer<string>)=>{
    setInterval(()=>observer.next(new Date().toString()),1000);

  });
  price:number=20000;
  Fruits=['Apple','Orange','Grapes','Mango','Kiwi','Pomegranate']
  decimalNum1:number=8.7589623;
  decimalNum2:number=5.23;
  decimalNum3:number=0.8178;
  number:'{minimunIntegerDigits}.{minimumFractionDigits}-{maximumFractionDigits}'
  jsonData={id:'01',name:{username:'Mamata'}};
  digit=100;digit1=10;digit2=1000;
  value='This is an Angular framework 8 series';
  nameArr=[
    'Mamata Yeul',
    'Gajanan Kharat',
    'Subhash',
    'Sommayya',
    'Ali Navab',
    'Chaya Kadam',
    'Mrunmayee Deshpande'
  ]
  constructor() { }

  ngOnInit() {
  }

}
