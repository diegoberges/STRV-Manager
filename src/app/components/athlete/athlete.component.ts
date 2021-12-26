import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/core/models/athlete.class';
import { Panel } from 'src/app/core/models/panel.class';
import { AthleteService } from './athlete.service';

@Component({
	selector: 'app-athlete',
	templateUrl: './athlete.component.html',
	styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {
	//#region Propiedades
	athlete: Athlete = new Athlete();
	itemsBread: string[] = [];
	private name: string = '';
	private username: string = '';
	private items: string[] = new Array<string>();
	panels: Panel[] = new Array<Panel>();
	//#endregion

	constructor(private athleteService: AthleteService) {}

	async ngOnInit(): Promise<any> {
		(await this.athleteService.getAthlete()).subscribe((resp) => {
			this.athlete = resp;
			this.createBreadItems(resp);
			this.createPanelItems(resp);

			console.log(resp);
			// console.log(resp.clubs);
			// console.log(resp.bikes);
			// console.log(resp.shoes);
		});

		(await this.athleteService.getZones()).subscribe((zonas) => {
			console.log(zonas);
		});
	}

	private createBreadItems(athlete: Athlete): void {
		this.name = athlete.firstname + ' ' + athlete.lastname;
		this.username =
			athlete.username != null || athlete.username != ''
				? '@' + athlete.username
				: ' ';
		this.items.push('Athlete');
		this.items.push(this.name.trim());
		this.items.push(this.username.trim());

		this.itemsBread = this.items.filter((item) => item);
	}

	private createPanelItems(athlete: Athlete): void {
		this.panels = [
			{
				disabled: athlete.clubs.length > 0,
				name: 'Clubs (' + athlete.clubs.length + ')',
				content: athlete.clubs,
			},
			{
				disabled: athlete.shoes.length > 0,
				name: 'Shoes (' + athlete.shoes.length + ')',
				content: athlete.shoes,
			},
			{
				disabled: athlete.bikes.length > 0,
				name: 'Bikes (' + athlete.bikes.length + ')',
				content: athlete.bikes,
			},
		];
	}

	private createContentPanels<T>(content: T[]): T[] {
		console.log(typeof content);
		console.log(typeof content[0]);
		console.log(this.constructor.toString());
		return content;
	}
}
