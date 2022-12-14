import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { TodoListPageRoutingModule } from "./todo-list-page-routing.module";
import { TodoListPageComponent } from "./todo-list-page.component";
import { AddInputComponent } from './add-input/add-input.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListPageComponent,
    AddInputComponent,
    TodoListComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    TodoListPageRoutingModule,
  ],
})
export class TodoListPageModule { }
