import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({

})
export class SortPipe implements PipeTransform {
  transform(input: Food[], args) {
    var sortDoneState = args [0];
    if(desiredSortState === "healthy") {
      return input.sort(function(food) {
        return food.calories <= 500
      });
    else if (desiredSortState === "unhealthy")
    }
  }
}
