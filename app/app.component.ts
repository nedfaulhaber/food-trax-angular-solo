import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

//1st child - food-list//
@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  template: `
  <div *ngFor="#currentFood of foodList" (click)="foodClicked(currentFood)">
    <h3> Meal Time! </h3>
    <h4>Name: {{currentFood.name}}</h4>
    <h4>Calories: {{currentFood.calories}}</h4>
    <h4>Details: {{currentFood.details}}</h4>
  </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
   this.onFoodSelect.emit(clickedFood);
 }
}

//root component//
@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>What Was That I Ate??</h1>
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
      <br>
      <h5>For Date: 06/03/16</h5>
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
    console.log(clickedFood);
  }
}
