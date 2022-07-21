import { Component, Input } from '@angular/core';
import { ActivityTotal } from 'src/app/core/models/strava/activity-total.interface';

@Component({
  selector: 'app-stat-component',
  templateUrl: './stat-component.component.html',
  styleUrls: ['./stat-component.component.scss'],
})
export class StatComponentComponent {
  oculto: boolean = true;
  @Input() stat: ActivityTotal = {} as ActivityTotal;
  constructor() {}
}
