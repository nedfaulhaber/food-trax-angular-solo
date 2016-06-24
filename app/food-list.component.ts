import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import {SortPipe} from './sort.pipe';

//1st child - food-list//
@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [SortPipe],
  directives: [FoodDisplayComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="healthy">Healthy Stuff!</option>
    <option value="unhealthy">Not So Healthy Stuff</option>
  </select>
  <br>
  <br>
  <h3>Meal Time!</h3>
  <h5>Today, you ate:</h5>
  <br>
  <div>
    <food-display *ngFor="#currentFood of foodList | sort:filterFood"
      (click)="foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood" [food]="currentFood">
    </food-display>
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
  public filterFood: string = "all"
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food):void {
    this.foodList.push(newFood);
  }
  onChange(filterOption) {
    this.filterFood = filterOption;
    console.log(this.filterFood);
  }
}


//-----------------------------------
