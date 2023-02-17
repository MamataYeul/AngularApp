import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure:false
  // we use for our instance change in added value but 
  //we can used mostly pure pipe and by defaut in is truewe can set it manually by giving false value.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm:any): any {
    if(value.length===0){
      return value;
    }
    return value.filter(function(search) {
      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase())> -1
      
    });
  }

}

