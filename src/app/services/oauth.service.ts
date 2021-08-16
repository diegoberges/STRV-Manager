import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from 'src/app/models/Token';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class OauthService {
	private _token: Token = new Token();

	constructor(private http: HttpClient) {}

	getRequestAccessUrl() {
		let url = new URL(environment.API_URL_AUTH);
		url.searchParams.append('client_id', environment.client_id);
		url.searchParams.append('response_type', 'code');
		url.searchParams.append('redirect_uri', environment.URL + '/authorization');
		url.searchParams.append('approval_prompt', 'force');
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

		const body = {};

		const params = new HttpParams()
			.append('client_id', environment.client_id)
			.append('client_secret', environment.client_secret)
			.append('code', code)
			.append('grant_type', environment.grant_type);

		this.http
			.post<any>('https://www.strava.com/oauth/token', body, {
				headers: headers,
				params: params,
			})
			.subscribe((res) => console.log(res));
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
