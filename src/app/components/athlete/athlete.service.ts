import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { OauthService } from 'src/app/core/services/oauth.service';
import { InteractionService } from '../../core/services/interaction.service';
import { Athlete } from 'src/app/core/models/athlete.interface';
import { Token } from 'src/app/core/models/token.interface';
import { AthleteZone } from '../../core/models/athlete-zone.interface';
import { AthleteSummary } from '../../core/models/athlete-summary.interface';

@Injectable({
	providedIn: 'root',
})
export class AthleteService {
	#token: Token;
	#headers: HttpHeaders = {} as HttpHeaders;
	#athleteBase: AthleteSummary = {} as AthleteSummary;
	constructor(
		private oauthService: OauthService,
		private interactionService: InteractionService
	) {
		this.#token = this.oauthService.getToken();
		if (Object.keys(this.#token).length > 0) {
			this.#headers = new HttpHeaders().append(
				'Authorization',
				this.#token.token_type + ' ' + this.#token.access_token
			);
		}
	}

	async getAthlete() {
		return this.interactionService.get<Athlete>('/athlete', this.#headers);
	}
	async getZones() {
		return this.interactionService.get<AthleteZone>(
			'/athlete/zones',
			this.#headers
		);
	}

	getAtheleteBase() {
		return this.#athleteBase;
	}
	setAthleteBase(athlete: AthleteSummary) {
		this.#athleteBase.profile_medium = athlete.profile_medium;
	}
}
