import { Component, OnInit } from '@angular/core';
import { AthleteService } from './athlete.service';
import { Athlete } from 'src/app/core/models/athlete.class';
import { AthleteExtended } from 'src/app/core/models/athlete-extended.class';

@Component({
	selector: 'app-athlete',
	templateUrl: './athlete.component.html',
	styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {
	athlete: Athlete = new Athlete();
	itemsBread: string[] = [];
	private name: string = '';
	private username: string = '';
	private items: string[] = [];
	constructor(private athleteService: AthleteService) {}

	ngOnInit(): void {
		this.athleteService.getAthlete().subscribe((resp) => {
			this.athlete = resp;
			this.itemsBread = this.createItemsBread(resp);
			console.log(resp);
		});
	}

	private createItemsBread(athlete: AthleteExtended): string[] {
		this.name = athlete.firstname + ' ' + athlete.lastname;
		this.username =
			athlete.username != null || athlete.username != ''
				? '@' + athlete.username
				: ' ';
		this.items.push('Athlete');
		this.items.push(this.name.trim());
		this.items.push(this.username.trim());

		return this.items.filter((item) => item);
	}
}
