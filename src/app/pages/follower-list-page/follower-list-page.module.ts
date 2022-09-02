import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FollowerListPageRoutingModule } from "./follower-list-page-routing.module";
import { FollowerListPageComponent } from "./follower-list-page.component";
import { FollowerListComponent } from './follower-list/follower-list.component';
import { FollowerItemComponent } from './follower-item/follower-item.component';

@NgModule({
  declarations: [
    FollowerListPageComponent,
    FollowerListComponent,
    FollowerItemComponent,
  ],
  imports: [
    SharedModule,
    FollowerListPageRoutingModule,
  ],
})
export class FollowerListPageModule { }
