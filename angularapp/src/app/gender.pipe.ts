import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any,searchTearm:any): any {
    
    return value.search.gender.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
      
   

  }

}
