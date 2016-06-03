import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { Food } from './food.model';

//1st child - food-list//
@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodDisplayComponent],
  template: `
  <div *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
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
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
 }
}


//-----------------------------------
