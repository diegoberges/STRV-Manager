import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { OauthService } from 'src/app/core/services/oauth.service';
import { InteractionService } from '../../core/services/interaction.service';
import { map } from 'rxjs/internal/operators';
import { Athlete } from 'src/app/core/models/athlete.class';
import { Token } from 'src/app/core/models/token.class';
import { AthleteZone } from '../../core/models/athlete-zone.class';

@Injectable({
	providedIn: 'root',
})
export class AthleteService {
	private token: Token = new Token();
	private headers: HttpHeaders;
	constructor(
		private oauthService: OauthService,
		private interactionService: InteractionService
	) {
		this.token = this.oauthService.getToken();
		this.headers = new HttpHeaders().append(
			'Authorization',
			this.token.token_type + ' ' + this.token.access_token
		);
	}

	async getAthlete() {
		return this.interactionService
			.get<Athlete>('/athlete', this.headers)
			.pipe(map((resp) => new Athlete({ ...resp })));
	}
	async getZones() {
		return this.interactionService.get<AthleteZone>(
			'/athlete/zones',
			this.headers
		);
	}
}
