import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

//root component//
@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>What Was That I Ate??</h1>
      <h5>For Date: 06/03/16</h5>
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
      <br>

    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Cereal", 240, "Gosh darn yummy!"),
      new Food("Guiness", 125, "Guinness is good for you - gives you strength."),
      new Food("Club Sandwich", 590, "Toothpicks and triangles? I want in!"),
      new Food("Grasshopper Salad", 20, "I wish this was another club sandwich."),
      new Food("Chocolate Mousse", 450, "Finished the day right!"),
    ];
  }
  foodWasSelected(clickedFood: Food): void {
  }
}
