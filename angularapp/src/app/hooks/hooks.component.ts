import {  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
// import { Product } from './models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy{
  @Input() userid: number;
  @Input() parentData: string;
  // @Input() product: Product;
  @ContentChild("child", {static: false}) contentChild: ElementRef;
  @ViewChild("childhook", {static: false}) viewChild: ElementRef;
pi;
counter;
num:number = 1;
  constructor() {
    this.pi = 3.14;
    console.log("HLifeCycle Hook constructor called");
   }
  
   ngOnDestroy(): void {
     console.log("LifeCycle Hook ngOnDestroy called");
     clearInterval(this.counter);
     
   }
  ngAfterViewChecked(): void {
    console.log('LifeCycle Hook ngAfterViewChecked called')
    this.viewChild.nativeElement.setAttribute('style',  `color:${this.parentData}`);
  }
  ngAfterViewInit(): void {
   console.log('LifeCycle Hook ngAfterViewInit called', this.viewChild);
  // this.viewChild.nativeElement.setAttribute('style',  `color:${this.parentData}`);
  }
  ngAfterContentChecked(): void {
    console.log('LifeCycle Hook ngAfterContentChecked called');
    this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);
  }
  ngDoCheck(): void {
    console.log('LifeCycle Hook ngDoCheck called', this.contentChild);
  }
  ngAfterContentInit(): void {
    console.log('LifeCycle Hook ngAfterContentInit called', this.contentChild);
    console.log('view int access', this.viewChild);
   // this.contentChild.nativeElement.setAttribute('style', 'color:green');
   //this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("LifeCycle Hook ngOnChanges called");
    console.log(this.parentData);
    for (const propname in changes) {
      const prop = changes[propname];
      const {previousValue, currentValue, firstChange} = prop;
      console.log(`Prop name ${propname}`);
      console.log(`Prev value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First change ${firstChange}`);
      console.log("---------------")
    }
  }
   // hooks 

  ngOnInit() {
    console.log("HooksComponent ngOnInit called")
    // api 
  }

}
