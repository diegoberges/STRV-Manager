import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OauthService } from 'src/app/core/services/oauth.service';
import { Token } from 'src/app/core/models/token.class';

@Injectable({
	providedIn: 'root',
})
export class AthleteService {
	private token: Token = new Token();
	constructor(private http: HttpClient, private oauth: OauthService) {
		this.token = this.oauth.getToken();
	}

	getAthlete() {
		console.log(this.token.token_type + ' ' + this.token.access_token);

		const headers = new HttpHeaders().append(
			'Authorization',
			this.token.token_type + ' ' + this.token.access_token
		);
		return this.http.get<any>('https://www.strava.com/api/v3/athlete', {
			headers: headers,
		});
	}
}
