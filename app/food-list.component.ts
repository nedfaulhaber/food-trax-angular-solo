import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';

//1st child - food-list//
@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodDisplayComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
  <div *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)">
    <h3> Meal Time! </h3>
    <h4>Name: {{currentFood.name}}</h4>
    <h4>Calories: {{currentFood.calories}}</h4>
    <h4>Details: {{currentFood.details}}</h4>
  </div>
  <edit-food-details *ngIf="selectedFood"[food]="selectedFood">
  </edit-food-details>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
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
  createFood(newFood: Food):void {
    this.foodList.push(newFood);
  }
}


//-----------------------------------
