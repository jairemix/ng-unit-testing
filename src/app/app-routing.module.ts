import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/todo-list-page/todo-list-page.module').then(m => m.TodoListPageModule),
  },
  {
    path: 'followers',
    loadChildren: () => import('./pages/follower-list-page/follower-list-page.module').then(m => m.FollowerListPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
