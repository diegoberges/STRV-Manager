import { Component, OnInit } from '@angular/core';
import { DetailedAthlete } from 'src/app/core/models/strava/detailed-athlete.interface';
import { Panel } from 'src/app/core/models/ui/panel.interface';
import { AthleteService } from './athlete.service';
import { ActivityStats } from '../../core/models/strava/activity-stats.interface';
import { HttpParams } from '@angular/common/http';
import { SummaryActivity } from '../../core/models/strava/summary-activity.interface';
import { lastValueFrom } from 'rxjs';

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
