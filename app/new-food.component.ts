import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="meal-form">
      <h3>Add a Meal</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
      <button (click)="addFood(newName, newCalories, newDetails)" class="btn-success btn-lg add-button">Add</button>
    </div>
    `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userCalories: HTMLInputElement, userDetails: HTMLInputElement) {
    var food = new Food(userName.value, parseInt(userCalories.value), userDetails.value);
    this.onSubmitNewFood.emit(food);
    userName.value = "";
    userCalories.value = "";
    userDetails.value = "";
  }
}
