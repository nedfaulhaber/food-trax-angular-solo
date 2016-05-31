import { Component, EventEmitter } from 'angular2/core';


//--------Child of TaskListComponent---------
@Component({
    selector: 'task-display',
    inputs: ['task'],
  template: `
    <h3>{{ task.description }}</h3>
  `
})
export class TaskComponent {
  public task: Task;
}
//-----Child of AddComponent----------
@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent],
  template: `
  <h3 *ngFor="#currentTask of taskList"
    (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask">
    {{ currentTask.description }}
  </h3>
  `
})
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log('child', clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
}

//-------Parent-----------
@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <task-list
        [taskList]="tasks"
        (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    </div>
  `
})
export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}
