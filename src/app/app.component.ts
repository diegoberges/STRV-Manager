import { Component } from '@angular/core';
import { AthleteSummary } from './core/models/athlete-summary.interface';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: string = 'STRV Manager';
	isCollapsed: boolean = false;
	athlete: AthleteSummary = {} as AthleteSummary;
	constructor() {}
}
