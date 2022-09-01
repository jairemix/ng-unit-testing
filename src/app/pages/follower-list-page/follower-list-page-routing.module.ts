import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowerListPageComponent } from './follower-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: FollowerListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowerListPageRoutingModule { }
