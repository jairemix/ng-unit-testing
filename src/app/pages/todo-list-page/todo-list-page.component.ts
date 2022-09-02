import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from 'src/app/shared/services/todos/todos.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {

  todo$ = this.todosService.getTodos$();

  constructor(
    private todosService: TodosService,
  ) { }

  ngOnInit(): void {
  }

  addTodo(todo: Todo) {
    this.todosService.addTodo(todo);
  }

  updateTodo(todo: Todo) {
    this.todosService.updateTodo(todo);
  }

}
