import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})

export class SearchPipe implements PipeTransform {

  transform(menu: [], filterSearch: string): any {
    if(menu.length === 0 || filterSearch === ''){
      return menu;
    }
}

}
