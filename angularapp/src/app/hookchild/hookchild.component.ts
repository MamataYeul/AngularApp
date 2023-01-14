import { createHostListener } from '@angular/compiler/src/core';
import { Component, Input, OnChanges, OnInit, SimpleChanges,DoCheck, AfterContentInit, ViewChild, ElementRef, ContentChild, AfterContentChecked, AfterViewInit ,AfterViewChecked,OnDestroy} from '@angular/core';


@Component({
  selector: 'app-hookchild',
  templateUrl: './hookchild.component.html',
  styleUrls: ['./hookchild.component.css']
})
export class HookchildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,
AfterViewChecked,OnDestroy{
  @Input() userName="";
  // @Input() employee='';
  constructor() {
    
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered.',changes);

    if(!changes['userName'].isFirstChange()){
      if(changes['userName'].currentValue==='Chris'){
        this.userName='Hello'+ this.userName
      }else{
        this.userName=changes['userName'].previousValue
      }
    }
  }

  ngOnInit() {
    console.log('ngOnInit from the child component'); 
  }

  ngDoCheck(){
    console.log('ngDoCheck triggered');
    //captures a change. 
  }
  @ViewChild('wrapper',{ static: false })wrapper!:ElementRef;
  @ContentChild('contentWrapper',{ static: true })content!:ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit -wrapper',this.wrapper);
    console.log('ngAfterContentInit -contentWrapper',this.content);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit-wrapper',this.wrapper);
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered');
   
  }
  // @createHostListener('window:beforeunload')
  ngOnDestroy():void{
   console.log('Child component is destroyed! :(');
   
  }
  
}
