import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredSortState = args [0];
    if(desiredSortState === "healthy") {
      return input.filter((food) => {
        return food.calories <= 500;
      });
    } else if (desiredSortState === "unhealthy") {
      return input.filter((food) => {
        return food.calories > 500;
      });
    } else {
      return input;
    }
  }
}
