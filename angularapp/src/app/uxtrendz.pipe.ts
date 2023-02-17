import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uxtrendz'
})
export class UxtrendzPipe implements PipeTransform {

  transform(value:any,limit): any {
   // console.log(value);
   if(value.length>limit){
    return value.substr(0,limit)+'....';
   }else{
    return value
   }
   

  }

}
