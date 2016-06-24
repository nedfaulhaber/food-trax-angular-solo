import { Component } from 'angular2/core';
import { Food } from './food.model';

//2nd child - food-display//
@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h4>Name: {{food.name}}</h4>
    <h4>Calories: {{food.calories}}</h4>
    <h4>Details: {{food.details}}</h4>
    <hr>
  `
})

export class FoodDisplayComponent {
  public food: Food;
}
