import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { InteractionService } from './interaction.service';
import { Observable } from 'rxjs/internal/Observable';
import { Welcome } from '../models/welcome.class';
import { Token } from '../models/token.class';
import { Params, Router } from '@angular/router';
import { QueryParams } from '../models/queryparams.class';
@Injectable({
	providedIn: 'root',
})
export class OauthService {
	private token: Token = new Token();
	constructor(
		private interactionService: InteractionService,
		private router: Router
	) {}

	getRequestAccessUrl() {
		let url = new URL('http://www.strava.com/oauth/authorize');
		url.searchParams.append('client_id', environment.client_id);
		url.searchParams.append('response_type', 'code');
		url.searchParams.append('redirect_uri', 'http://localhost:4200/token');
		url.searchParams.append('approval_prompt', 'auto');
		url.searchParams.append(
			'scope',
			'read,read_all,profile:read_all,activity:read,activity:read_all'
		);

		window.location.href = url.toString();
	}

	getQueryParams(params: Params): QueryParams {
		return new QueryParams(params.state, params.code, params.scope);
	}

	getToken(): Token {
		//TODO meter esto en un interceptor
		if (this.token.expires_in <= 0) {
			this.router.navigate(['token']);
		}

		return this.token;
	}

	deauthorize() {}

	refreshToken(code: string): Observable<Welcome> {
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

		return this.interactionService.post<Welcome>(
			'https://www.strava.com/oauth/token',
			body,
			headers,
			params
		);
	}

	setToken(token: Token) {
		this.token = token;
	}
}
