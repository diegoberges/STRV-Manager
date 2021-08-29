import { Component, OnInit } from '@angular/core';
import { AthleteService } from './athlete.service';
import { OauthService } from 'src/app/core/services/oauth.service';

@Component({
	selector: 'app-athlete',
	templateUrl: './athlete.component.html',
	styleUrls: ['./athlete.component.sass'],
})
export class AthleteComponent implements OnInit {
	constructor(private oauth: OauthService, private athlete: AthleteService) {}

	ngOnInit(): void {
		this.oauth.getToken();
		console.log(this.athlete.getAthlete());
	}
}
