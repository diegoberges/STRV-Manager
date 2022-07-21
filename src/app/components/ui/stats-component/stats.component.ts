import { Component, OnInit, Input } from '@angular/core';
import { ActivityStats } from '../../../core/models/strava/activity-stats.interface';

@Component({
  selector: 'app-stats-component',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  @Input() statics: ActivityStats = {} as ActivityStats;
  constructor() {}

  ngOnInit(): void {
    console.log(this.statics);
  }
}
