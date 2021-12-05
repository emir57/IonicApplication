import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../models/user'
@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value:User[], searchString:string): User[] {
    searchString = searchString ? searchString.toLocaleLowerCase():"";
    return searchString ?
      value.filter(
        (u:User)=>
        u.first_name.toLocaleLowerCase().indexOf(searchString)!==-1 ||
        u.last_name.toLocaleLowerCase().indexOf(searchString)!==-1 ||
        u.email.toLocaleLowerCase().indexOf(searchString)!==-1
        ):
      value;
  }

}
