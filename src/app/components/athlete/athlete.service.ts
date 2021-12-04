import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OauthService } from 'src/app/core/services/oauth.service';
import { Token } from 'src/app/core/models/token.class';
import { InteractionService } from '../../core/services/interaction.service';
import { AthleteExtended } from 'src/app/core/models/athlete-extended.class';

@Injectable({
	providedIn: 'root',
})
export class AthleteService {
	private token: Token = new Token();
	constructor(
		private http: HttpClient,
		private oauthService: OauthService,
		private interactionService: InteractionService
	) {
		this.token = this.oauthService.getToken();
	}

	getAthlete() {
		// TODO Meter esto en un interceptor
		const headers = new HttpHeaders().append(
			'Authorization',
			this.token.token_type + ' ' + this.token.access_token
		);
		return this.interactionService.get<AthleteExtended>('/athlete', headers);
	}
}
