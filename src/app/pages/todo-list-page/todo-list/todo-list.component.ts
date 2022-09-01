import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, OnChanges {

  @Input() todos: any[];
  @Output() todosChange = new EventEmitter();

  numIncompleteTasks: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.numIncompleteTasks = this.todos.filter(todo => !todo.completed).length;
  }

  completeTodo(index: number) {
    const todo = this.todos[index];
    const completedTodo = {
      ...todo,
      completed: !todo.completed,
    };
    this.todosChange.emit([
      ...this.todos.slice(0, index),
      completedTodo,
      ...this.todos.slice(index + 1),
    ]);
  }

}
