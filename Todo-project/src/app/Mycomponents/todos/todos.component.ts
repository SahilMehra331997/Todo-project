import { Component, Input } from '@angular/core';
import { Todo } from '../../todos';
import { AddTodosComponent } from '../add-todos/add-todos.component';
import {TodoItemsComponent} from '../todo-items/todo-items.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todos',
  standalone: true,
  template: `<div class="container-fluid">
              <app-add-todos (todoAdd)="addTodo($event)"></app-add-todos>
             </div>
             <div *ngIf="this.todos.length==0 else elseblock">NO TODOS TO DISPLAY</div>
             <ng-template #elseblock>
             <div class="container-fluid" *ngFor="let todo of todos"> 
               <app-todo-items [todo]="todo" (todoDelete)="deleteTodo($event)"  (todoUpdate)="updateTodo($event)"></app-todo-items>
            </div>`,
  styleUrl: './todos.component.css',
  imports: [CommonModule, TodoItemsComponent, AddTodosComponent]
})
export class TodosComponent {

  todos: Todo[];
  constructor() {
    this.todos = [];
    const json=localStorage.getItem("TASK");
    if(!json)
    this.todos=[]
    else
    this.todos=JSON.parse(json);
    console.log(this.todos);
  }
  @Input() deleteTodo(todo: Todo) {
    const idx = this.todos.indexOf(todo)
    this.todos.splice(idx, 1);
    this.save();
  }
  @Input() addTodo(todo: Todo) {
    if (todo.title && todo.description)
      this.todos.push(todo);
    else
      alert("FIELDS ARE EMPTY");
    this.save();
  }

  @Input() updateTodo(todo: Todo) {
      this.todos = this.todos.map((elem:Todo):Todo=>{
        if(elem.title===todo.title && elem.description===todo.description){
        elem.active=todo.active;
        }
        return elem
       });
       this.save();
  }

  save()
  {
    localStorage.setItem("TASK",JSON.stringify(this.todos));
  }
}
