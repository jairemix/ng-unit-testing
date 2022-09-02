import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Follower } from 'src/app/shared/models/follower.model';
import { FollowersService } from 'src/app/shared/services/followers/followers.service';

@Component({
  selector: 'app-follower-list-page',
  templateUrl: './follower-list-page.component.html',
  styleUrls: ['./follower-list-page.component.scss']
})
export class FollowerListPageComponent implements OnInit {

  followers?: Follower[];
  fetchFollowersError: any;

  constructor(
    private followersService: FollowersService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.followersService.fetchFollowers().subscribe({
      next: (followers) => {
        this.followers = followers;
        this.fetchFollowersError = null;
        this.cd.markForCheck();
      },
      error: (error) => {
        // console.log('error', error);
        this.fetchFollowersError = error;
        this.cd.markForCheck();
      },
    });
  }

}
