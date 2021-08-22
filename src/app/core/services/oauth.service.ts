import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from 'src/app/core/models/Token';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { InteractionService } from './interaction.service';

@Injectable({
	providedIn: 'root',
})
export class OauthService {
	private _token: Token = new Token();

	constructor(
		private http: HttpClient,
		private interaction: InteractionService
	) {}

	getRequestAccessUrl() {
		let url = new URL('http://www.strava.com/oauth/authorize');
		url.searchParams.append('client_id', environment.client_id);
		url.searchParams.append('response_type', 'code');
		url.searchParams.append(
			'redirect_uri',
			'http://localhost:4200/authorization'
		);
		url.searchParams.append('approval_prompt', 'auto');
		url.searchParams.append(
			'scope',
			'read,read_all,profile:read_all,activity:read,activity:read_all'
		);

		window.location.href = url.toString();
	}

	getToken() {}

	deauthorize() {}

	refreshToken(code: string) {
		const headers = new HttpHeaders().append(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);

		const body: any = {};

		const params = new HttpParams()
			.append('client_id', environment.client_id)
			.append('client_secret', environment.client_secret)
			.append('code', code)
			.append('grant_type', 'authorization_code');

		this.http
			.post<any>('https://www.strava.com/oauth/token', body, {
				headers: headers,
				params: params,
			})
			.subscribe((res) => console.log(res));

		// this.interaction
		// 	.post('https://www.strava.com/oauth/token', body, headers, params)
		// 	.subscribe((res) => console.log(res));
	}

	// SetToken(scope: string, code: string, state: string){
	//   // this._token.setScope(scope);
	//   // this._token.setCode(code);
	//   // this._token.setState(state);
	// }

	// getToken() : Token{
	//   return this._token;
	// }
}
