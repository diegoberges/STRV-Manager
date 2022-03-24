import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { OauthService } from 'src/app/core/services/oauth.service';
import { InteractionService } from '../../core/services/interaction.service';
import { DetailedAthlete } from 'src/app/core/models/strava/detailed-athlete.interface';
import { Token } from 'src/app/core/models/api/token.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Constants } from 'src/app/core/utils/constants';

@Injectable({
	providedIn: 'root',
})
export class AthleteService {
	#token!: Token;
	#headers!: HttpHeaders;
	constructor(
		private oauthService: OauthService,
		private interactionService: InteractionService
	) {
		this.#token = this.oauthService.getToken();

		if (this.oauthService.tokenExist()) {
			this.#headers = new HttpHeaders().append(
				Constants.AUTHORIZATION,
				this.#token.token_type + ' ' + this.#token.access_token
			);
		}
	}
	getAthlete(): Observable<DetailedAthlete> {
		return this.interactionService.get<DetailedAthlete>(
			Constants.ENDPOINT_ATHLETE,
			this.#headers
		);
	}
	// getActivities(): Observable<>{
	// 	return this.interactionService.get<>('/athlete/activities', this.#headers);
	// }
	// getZones(): Observable<AthleteZone> {
	// 	return this.interactionService.get<AthleteZone>(
	// 		Constants.ENDPOINT_ZONES,
	// 		this.#headers
	// 	);
	// }
}
