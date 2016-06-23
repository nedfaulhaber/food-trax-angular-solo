import { Component } from 'angular2/core';
import { Food } from './food.model';

//2nd child - food-display//
@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3> Meal Time! </h3>
    <h4>Name: {{food.name}}</h4>
    <h4>Calories: {{food.calories}}</h4>
    <h4>Details: {{food.details}}</h4>
  `
})

export class FoodDisplayComponent {
  public food: Food;
}
