import { Component, OnInit } from '@angular/core';
import { DetailedAthlete } from 'src/app/core/models/strava/detailed-athlete.interface';
import { Panel } from 'src/app/core/models/ui/panel.interface';
import { AthleteService } from './athlete.service';
import { ActivityStats } from '../../core/models/strava/activity-stats.interface';
import { HttpParams } from '@angular/common/http';
import { SummaryActivity } from '../../core/models/strava/summary-activity.interface';
import { lastValueFrom } from 'rxjs';
import {
	NzTableFilterFn,
	NzTableFilterList,
	NzTableSortFn,
	NzTableSortOrder,
} from 'ng-zorro-antd/table';
interface ColumnItem {
	name: string;
	sortOrder: NzTableSortOrder | null;
	sortFn: NzTableSortFn<SummaryActivity> | null;
	listOfFilter: NzTableFilterList;
	filterFn: NzTableFilterFn<SummaryActivity> | null;
	filterMultiple: boolean;
	sortDirections: NzTableSortOrder[];
}
@Component({
	selector: 'app-athlete',
	templateUrl: './athlete.component.html',
	styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {
	//#region Propiedades
	athlete: DetailedAthlete = {} as DetailedAthlete;
	itemsBread: string[] = [];
	#items: string[] = new Array<string>();
	panels: Panel[] = new Array<Panel>();
	statics: ActivityStats = {} as ActivityStats;
	#totalActivities: number = 0;
	activities: SummaryActivity[] = [];
	activitiesColumns: ColumnItem[] = [
		{
			name: 'Fecha',
			sortOrder: 'ascend',
			sortFn: null,
			sortDirections: ['ascend', null],
			listOfFilter: [],
			filterFn: null,
			filterMultiple: true,
		},
		{
			name: 'Tipo',
			sortOrder: 'ascend',
			sortFn: (a: SummaryActivity, b: SummaryActivity) =>
				a.type.localeCompare(b.type),
			sortDirections: ['ascend', null],
			listOfFilter: [],
			filterFn: null,
			filterMultiple: true,
		},
		{
			name: 'Actividad',
			sortOrder: 'ascend',
			sortFn: (a: SummaryActivity, b: SummaryActivity) =>
				a.name.localeCompare(b.name),
			sortDirections: ['ascend', null],
			listOfFilter: [],
			filterFn: null,
			filterMultiple: true,
		},
		{
			name: 'Tiempo',
			sortOrder: 'ascend',
			sortFn: (a: SummaryActivity, b: SummaryActivity) =>
				a.moving_time - b.moving_time,
			sortDirections: ['ascend', null],
			listOfFilter: [],
			filterFn: null,
			filterMultiple: true,
		},
		{
			name: 'Ritmo',
			sortOrder: 'ascend',
			sortFn: (a: SummaryActivity, b: SummaryActivity) =>
				(a.moving_time * 60) / (a.distance * 1000) -
				(b.moving_time * 60) / (b.distance * 1000),
			sortDirections: ['ascend', null],
			listOfFilter: [],
			filterFn: null,
			filterMultiple: true,
		},
		{
			name: 'HR Medio',
			sortOrder: 'ascend',
			sortFn: (a: SummaryActivity, b: SummaryActivity) =>
				a.average_heartrate - b.average_heartrate,
			sortDirections: ['ascend', null],
			listOfFilter: [],
			filterFn: null,
			filterMultiple: true,
		},
		{
			name: 'HR Max',
			sortOrder: 'ascend',
			sortFn: (a: SummaryActivity, b: SummaryActivity) =>
				a.max_heartrate - b.max_heartrate,
			sortDirections: ['ascend', null],
			listOfFilter: [],
			filterFn: null,
			filterMultiple: true,
		},
	];
	//#endregion

	constructor(private athleteService: AthleteService) {}

	async ngOnInit() {
		await lastValueFrom(this.athleteService.getAthlete()).then((resp) => {
			this.athlete = resp;
			// this.athlete.clubs.forEach((club) => (club.type = TypeObject.Club));
			// this.athlete.shoes.forEach((shoe) => (shoe.type = TypeObject.Shoe));
			// this.athlete.bikes.forEach((bike) => (bike.type = TypeObject.Bike));
			// this.createBreadItems(resp);
			// this.createPanelItems(resp);
			//TODO Guardar el objeto completo
			this.athleteService.setAthleteId(this.athlete.id);
		});

		await lastValueFrom(this.athleteService.getStats()).then((stats) => {
			this.statics = stats;
			this.#totalActivities =
				stats.all_ride_totals.count +
				stats.all_run_totals.count +
				stats.all_swim_totals.count;
		});
		// this.athleteService.getZones().subscribe((zonas) => {
		// 	console.log(zonas);
		// });

		// TODO Sacar a un metodo
		if (sessionStorage.getItem('activities') == null) {
			const pages = Math.ceil(this.#totalActivities / 200);
			const promesas: Promise<SummaryActivity[]>[] = [];

			for (let i = 1; i <= pages; i++) {
				let params = new HttpParams();
				params = params.append('page', i);
				params = params.append('per_page', '200');
				promesas.push(lastValueFrom(this.athleteService.getActivities(params)));
			}

			await Promise.all(promesas).then(
				(activities) => {
					console.log(activities);
					activities.forEach((page) => {
						this.activities = [...this.activities, ...page];
					});
					// Las guardo en el sesion storage para no tener que recargarlas cada vez que entramos
					sessionStorage.setItem('activities', JSON.stringify(this.activities));
				},
				(reason) => {
					console.error(reason);
				}
			);
		} else {
			this.activities = JSON.parse(sessionStorage.getItem('activities') ?? '');
		}
		console.log('🚀 ~ this.activities', this.activities);
	}

	// private createBreadItems(athlete: Athlete): void {
	// 	this.#name = athlete.firstname + ' ' + athlete.lastname;
	// 	this.#username =
	// 		athlete.username != null || athlete.username != ''
	// 			? '@' + athlete.username
	// 			: ' ';
	// 	this.#items.push('Athlete');
	// 	this.#items.push(this.#name.trim());
	// 	this.#items.push(this.#username.trim());

	// 	this.itemsBread = this.#items.filter((item) => item);
	// }

	// private createPanelItems(athlete: Athlete): void {
	// 	this.panels = [
	// 		{
	// 			disabled: athlete.clubs.length > 0,
	// 			name: 'Clubs (' + athlete.clubs.length + ')',
	// 			content: athlete.clubs,
	// 		},
	// 		{
	// 			disabled: athlete.shoes.length > 0,
	// 			name: 'Shoes (' + athlete.shoes.length + ')',
	// 			content: athlete.shoes,
	// 		},
	// 		{
	// 			disabled: athlete.bikes.length > 0,
	// 			name: 'Bikes (' + athlete.bikes.length + ')',
	// 			content: athlete.bikes,
	// 		},
	// 	];
	// }
}
