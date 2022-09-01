import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFooterComponent implements OnInit {

  @Input() numIncompleteTasks: number;

  constructor() { }

  ngOnInit(): void {
  }

}
