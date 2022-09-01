import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FollowerService } from 'src/app/shared/services/followers/followers.service';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowerListComponent implements OnInit {

  followers: any[];
  fetchFollowersError: any;

  constructor(
    private followerService: FollowerService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.followerService.fetchFollowers().subscribe((followers) => {
      this.followers = followers;
      this.fetchFollowersError = null;
      this.cd.markForCheck();
    }, (error) => {
      // console.log('error', error);
      this.fetchFollowersError = error;
      this.cd.markForCheck();
    });
  }

}
