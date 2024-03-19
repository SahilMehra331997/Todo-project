import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todos',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form class="column row-cols-lg-auto g-3 justify-content-center align-items-center" (ngSubmit)="addTodo()">
               <div class="form-group ">
                 <label for="title">TODO TITLE</label>
                 <input [(ngModel)]="title" type="text" name="title"  class="form-control" placeholder="Enter title">
               </div>
               <div class="form-group">
                 <label for="desc">TODO DESCRIPTION</label>
                 <input  type="text" name="desc"  [(ngModel)]="desc" class="form-control" placeholder="Enter description">
                <button type="submit" class="btn btn-primary" >Add</button>
              </div>
            </form>
  `,
  styleUrl: './add-todos.component.css'
})
export class AddTodosComponent {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() {
    this.desc = "";
    this.title = "";
  }
  addTodo() {
    const todo: Todo = {
      title: this.title,
      description: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
