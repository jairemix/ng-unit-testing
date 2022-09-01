import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FollowerListPageRoutingModule } from "./follower-list-page-routing.module";
import { FollowerListPageComponent } from "./follower-list-page.component";

@NgModule({
  declarations: [
    FollowerListPageComponent,
  ],
  imports: [
    CommonModule,
    FollowerListPageRoutingModule,
  ],
})
export class FollowerListPageModule { }
