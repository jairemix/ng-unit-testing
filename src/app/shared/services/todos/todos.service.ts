import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos$ = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  // method returns Observable in case it needs to be async in the future
  addTodo(todo: Todo): Observable<Todo[]> {
    const newTodos = [...this.todos$.value, todo];
    this.todos$.next(newTodos);
    return of(newTodos);
  }

  // method returns Observable in case it needs to be async in the future
  updateTodo(todo: Todo): Observable<Todo[]> {
    const todos = this.todos$.value;
    const index = todos.findIndex((t) => t.id === todo.id);
    if (index >= 0) {
      const newTodos = [
        ...todos.slice(0, index),
        todo,
        ...todos.slice(index + 1),
      ];
      this.todos$.next(newTodos);
      return of(newTodos);
    } else {
      return throwError(() => new Error('TODO_NOT_FOUND'));
    }
  }

  getTodos$() {
    return this.todos$.asObservable();
  }

  getTodos() {
    return this.todos$.value;
  }
}
