import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Follower } from 'src/app/shared/models/follower.model';
import { FollowersService } from 'src/app/shared/services/followers/followers.service';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowerListComponent implements OnInit {

  @Input() followers?: Follower[];
  @Input() fetchFollowersError?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
