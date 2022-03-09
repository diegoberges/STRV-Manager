import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { OauthService } from 'src/app/core/services/oauth.service';
import { InteractionService } from '../../core/services/interaction.service';
import { Athlete } from 'src/app/core/models/athlete.interface';
import { Token } from 'src/app/core/models/token.interface';
import { AthleteZone } from '../../core/models/athlete-zone.interface';
import { Observable } from 'rxjs/internal/Observable';

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
				'Authorization',
				this.#token.token_type + ' ' + this.#token.access_token
			);
		}
	}
	getAthlete(): Observable<Athlete> {
		return this.interactionService.get<Athlete>('/athlete', this.#headers);
	}
	getZones(): Observable<AthleteZone> {
		return this.interactionService.get<AthleteZone>(
			'/athlete/zones',
			this.#headers
		);
	}
}
