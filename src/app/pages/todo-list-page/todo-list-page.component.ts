import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {

  todos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo: any) {
    this.todos = [
      ...this.todos,
      todo,
    ];
  }

}
