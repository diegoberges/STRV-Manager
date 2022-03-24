import { Component, OnInit } from '@angular/core';
import { TypeObject } from 'src/app/core/enums/type-object';
import { DetailedAthlete } from 'src/app/core/models/strava/detailed-athlete.interface';
import { Panel } from 'src/app/core/models/ui/panel.interface';
import { AthleteService } from './athlete.service';

@Component({
	selector: 'app-athlete',
	templateUrl: './athlete.component.html',
	styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {
	//#region Propiedades
	athlete: DetailedAthlete = {} as DetailedAthlete;
	itemsBread: string[] = [];
	#name: string = '';
	#username: string = '';
	#items: string[] = new Array<string>();
	panels: Panel[] = new Array<Panel>();
	//#endregion

	constructor(private athleteService: AthleteService) {}

	ngOnInit() {
		this.athleteService.getAthlete().subscribe((resp) => {
			// this.athlete = resp;
			// this.athlete.clubs.forEach((club) => (club.type = TypeObject.Club));
			// this.athlete.shoes.forEach((shoe) => (shoe.type = TypeObject.Shoe));
			// this.athlete.bikes.forEach((bike) => (bike.type = TypeObject.Bike));
			// this.createBreadItems(resp);
			// this.createPanelItems(resp);
		});

		// this.athleteService.getZones().subscribe((zonas) => {
		// 	console.log(zonas);
		// });
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
