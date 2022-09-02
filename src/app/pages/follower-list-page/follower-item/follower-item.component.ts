import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Follower } from 'src/app/shared/models/follower.model';

@Component({
  selector: 'app-follower-item',
  templateUrl: './follower-item.component.html',
  styleUrls: ['./follower-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowerItemComponent implements OnInit {

  @Input() follower!: Follower;

  constructor() { }

  ngOnInit(): void {
  }

}
