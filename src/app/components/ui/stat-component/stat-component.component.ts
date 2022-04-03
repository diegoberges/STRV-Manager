import { Component, Input, OnInit } from '@angular/core';
import { ActivityTotal } from 'src/app/core/models/strava/activity-total.interface';

@Component({
	selector: 'app-stat-component',
	templateUrl: './stat-component.component.html',
	styleUrls: ['./stat-component.component.scss'],
})
export class StatComponentComponent implements OnInit {
	oculto: boolean = true;
	@Input() stat: ActivityTotal = {} as ActivityTotal;
	constructor() {}

	ngOnInit(): void {
		// console.log(this.stat);
		// console.log(this.stat.count);
		// this.oculto = this.stat != undefined && this.stat.count === 0;
		// console.log(this.oculto);
	}
}
