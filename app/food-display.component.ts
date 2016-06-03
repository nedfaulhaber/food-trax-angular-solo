import { Component } from 'angular2/core';
import { Food } from './food.model';

//2nd child - food-display//
@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
  <div *ngFor="#currentFood of foodList" (click)="foodClicked(currentFood)">
    <h3> Meal Time! </h3>
    <h4>Name: {{currentFood.name}}</h4>
    <h4>Calories: {{currentFood.calories}}</h4>
    <h4>Details: {{currentFood.details}}</h4>
  </div>
  `
})

export class FoodDisplayComponent {
  public food: Food;
}
