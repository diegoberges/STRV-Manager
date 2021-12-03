import { Component, OnInit } from '@angular/core';
import { AthleteService } from './athlete.service';
import { OauthService } from 'src/app/core/services/oauth.service';
import { Athlete } from 'src/app/core/models/athlete.class';

@Component({
	selector: 'app-athlete',
	templateUrl: './athlete.component.html',
	styleUrls: ['./athlete.component.sass'],
})
export class AthleteComponent implements OnInit {
	athlete: Athlete = new Athlete();
	constructor(
		private oauth: OauthService,
		private athleteService: AthleteService
	) {}

	ngOnInit(): void {
		this.athleteService.getAthlete().subscribe((resp) => {
			this.athlete = resp;
			console.log(resp);
		});
	}
}
