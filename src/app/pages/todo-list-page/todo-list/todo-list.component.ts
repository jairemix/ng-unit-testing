import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, OnChanges {

  @Input() todos!: Todo[];
  @Output() updateTodo = new EventEmitter<Todo>();

  numIncompleteTasks!: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.numIncompleteTasks = this.todos.filter(todo => !todo.completed).length;
  }

  toggleCompletion(todo: Todo) {
    this.updateTodo.emit({
      ...todo,
      completed: !todo.completed,
    });
  }

}
