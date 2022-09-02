import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos$ = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  // TODO: make asynchronous in the future
  addTodo(todo: Todo) {
    const todos = [...this.todos$.value, todo];
    this.todos$.next(todos);
  }

  // TODO: make asynchronous in the future
  updateTodo(todo: Todo) {
    const todos = this.todos$.value;
    const index = todos.findIndex((t) => t.id === todo.id);
    if (index >= 0) {
      const newTodos = [
        ...todos.slice(0, index),
        todo,
        ...todos.slice(index + 1),
      ];
      this.todos$.next(newTodos);
    } else {
      throw new Error('TODO_NOT_FOUND');
    }
  }

  getTodos$() {
    return this.todos$.asObservable();
  }

  getTodos() {
    return this.todos$.value;
  }
}
