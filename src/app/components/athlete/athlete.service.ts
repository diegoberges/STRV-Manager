import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { OauthService } from 'src/app/core/services/oauth.service';
import { InteractionService } from '../../core/services/interaction.service';
import { DetailedAthlete } from 'src/app/core/models/strava/detailed-athlete.interface';
import { Token } from 'src/app/core/models/api/token.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Constants } from 'src/app/core/utils/constants';
import { ActivityStats } from '../../core/models/strava/activity-stats.interface';

@Injectable({
	providedIn: 'root',
})
export class AthleteService {
	#token!: Token;
	#headers!: HttpHeaders;
	#athleteId!: number;
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
	getStats(): Observable<ActivityStats> {
		// const extraParams = params ? paramsToString(params) : '';
		// `${this.urlBase}${this.module}${endpoint}${extraParams}`,
		return this.interactionService.get<ActivityStats>(
			'/athletes/' + this.#athleteId + '/stats',
			this.#headers
		);
	}
	getAthleteId(): number {
		return this.#athleteId;
	}
	setAthleteId(id: number) {
		this.#athleteId = id;
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