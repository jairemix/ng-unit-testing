import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FollowerListPageRoutingModule } from "./follower-list-page-routing.module";
import { FollowerListPageComponent } from "./follower-list-page.component";
import { FollowerListComponent } from './follower-list/follower-list.component';

@NgModule({
  declarations: [
    FollowerListPageComponent,
    FollowerListComponent,
  ],
  imports: [
    SharedModule,
    FollowerListPageRoutingModule,
  ],
})
export class FollowerListPageModule { }
