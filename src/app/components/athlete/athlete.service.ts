import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { OauthService } from 'src/app/core/services/oauth.service';
import { InteractionService } from '../../core/services/interaction.service';
import { DetailedAthlete } from 'src/app/core/models/strava/detailed-athlete.interface';
import { Token } from 'src/app/core/models/api/token.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Constants } from 'src/app/core/utils/constants';
import { ActivityStats } from '../../core/models/strava/activity-stats.interface';
import { SummaryActivity } from '../../core/models/strava/summary-activity.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AthleteService {
	#token!: Token;
	#headers!: HttpHeaders;
	#athleteId!: number;
	#activities: SummaryActivity[] = [];
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
	getActivities(params?: HttpParams): Observable<SummaryActivity[]> {
		return this.interactionService.get<SummaryActivity[]>(
			'/athlete/activities',
			this.#headers,
			params
		);
	}
	// getZones(): Observable<AthleteZone> {
	// 	return this.interactionService.get<AthleteZone>(
	// 		Constants.ENDPOINT_ZONES,
	// 		this.#headers
	// 	);
	// }
	async setActivities(totalActivities: number): Promise<void> {
		if (sessionStorage.getItem('activities') == null) {
			const pages = Math.ceil(totalActivities / 200);
			const promesas: Promise<SummaryActivity[]>[] = [];

			for (let i = 1; i <= pages; i++) {
				let params = new HttpParams();
				params = params.append('page', i);
				params = params.append('per_page', '200');
				promesas.push(lastValueFrom(this.getActivities(params)));
			}

			await Promise.all(promesas).then(
				(activities) => {
					activities.forEach((page) => {
						this.#activities = [...this.#activities, ...page];
					});
					// Añado datos formateados a la actividad para trabajar de manera mas sencilla con ellos en UI
					this.#activities.forEach((activitie) => {
						activitie.moving_time_miliseconds = activitie.moving_time * 1000;
						activitie.moving_time_minutes = activitie.moving_time / 60;
						activitie.distance_km = activitie.distance / 1000;
						activitie.pace =
							(activitie.moving_time_minutes / activitie.distance_km) *
							60 *
							1000;
						activitie.url = 'https://www.strava.com/activities/' + activitie.id;
					});

					// Las guardo en el sesion storage para no tener que recargarlas cada vez que entramos
					sessionStorage.setItem(
						'activities',
						JSON.stringify(this.#activities)
					);
					sessionStorage.setItem('dateActivities', JSON.stringify(new Date()));
				},
				(reason) => {
					console.error(reason);
				}
			);
		} else {
			this.#activities = JSON.parse(sessionStorage.getItem('activities') ?? '');
		}
	}

	getActivitiesByType(type: string): SummaryActivity[] {
		return this.#activities.filter(
			(activitie) => activitie.sport_type === type
		);
	}
	areActivitiesWithFlag(): boolean {
		return this.#activities.some((activitie) => activitie.flagged);
	}
}
