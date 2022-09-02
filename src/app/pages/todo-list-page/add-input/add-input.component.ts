import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo.model';
import { v4 } from "uuid"

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddInputComponent implements OnInit {

  @Output() addTodo = new EventEmitter<Todo>();

  formControl = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {
  }

  addTodoFn() {
    if (!this.formControl.valid) {
      return;
    }
    const newTodo = this.createTodo(this.formControl.value!)
    this.formControl.setValue('');
    this.addTodo.emit(newTodo);
  }

  createTodo(title: string): Todo {
    return {
      id: v4(),
      task: title,
      completed: false,
    };
  }

}
