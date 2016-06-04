import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="meal-form">
    <br>
    <br>
      <h3>Edit Meal Details: </h3>
      <br>
      <h4>Edit Name: </h4>
      <input [(ngModel)]="food.name" class="col-sm-12 input-lg meal-form"/>
      <br>
      <br>
      <br>
      <h4>Edit Calories: </h4>
      <input [(ngModel)]="food.calories" class="col-sm-12 input-lg meal-form"/>
      <br>
      <br>
      <br>
      <h4>Edit Details: </h4>
      <input [(ngModel)]="food.details" class="col-sm-12 input-lg meal-form"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
