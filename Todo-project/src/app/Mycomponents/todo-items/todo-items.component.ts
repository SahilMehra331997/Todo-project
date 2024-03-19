import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="my-3">
                <input type="checkbox" [checked]="!todo.active"  (change)="toggleStrikeThrough($event);upateTodo(todo)">
                <div class="container1" [ngStyle]="{ 'text-decoration': todo.active?'none':'line-through'}">
                  <h3>{{todo.title}}</h3>
                  <p>{{todo.description}}</p>
                </div>
                <div class="container2">
                 <p *ngIf = "this.todo.active else elseblock">TASK ACTIVE</p>
                 <ng-template #elseblock><p>TASK COMPLETED</p></ng-template>
                 <button class="btn" (click)="onClick(todo)">Delete</button>
                </div>
              </div> 
  `,
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input() todo!:Todo;
  isChecked:boolean; 
  constructor( ){
    this.isChecked=false;
   }
     
   @Output() todoUpdate:EventEmitter<Todo>=new EventEmitter();
     upateTodo(todo:Todo)
     {
      this.todoUpdate.emit(todo);
     }

    toggleStrikeThrough(event:any) {
    this.isChecked =event.target.checked;
    this.todo.active=!this.isChecked;//if this.checked is true i.e the checkbox is selected meaning that the task is complete so task is not active(false)
    } 

  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
    onClick(todo:Todo){
    this.todoDelete.emit(todo);
   }

}
