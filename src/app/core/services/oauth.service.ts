import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { InteractionService } from './interaction.service';
import { Observable } from 'rxjs/internal/Observable';
import { Params, Router } from '@angular/router';
import { Token } from '../models/token.interface';
import { QueryParams } from '../models/queryparams.interface';
import { Welcome } from '../models/welcome.interface';
@Injectable({
	providedIn: 'root',
})
export class OauthService {
	private token: Token = {} as Token;
	private queryParams: QueryParams = {} as QueryParams;
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
		this.queryParams.state = params.state;
		this.queryParams.code = params.code;
		this.queryParams.scope = params.scope;

		return this.queryParams;
	}

	deauthorize() {
		if (this.token.expires_in <= 0) {
			this.router.navigate(['token']);
		}
	}

	getToken(): Token {
		//TODO meter esto en un interceptor
		if (Object.keys(this.token).length === 0) {
			// TODO Error personalizado de token vacio
			this.router.navigate(['token']);
			return this.token;
		}
		if (this.token.expires_in <= 0) {
			// TODO Errores personalizado de token expirado
			this.router.navigate(['token']);
			return this.token;
		}

		return this.token;
	}
	setToken(
		token_type: string,
		expires_at: number,
		expires_in: number,
		refresh_token: string,
		access_token: string
	) {
		this.token.token_type = token_type;
		this.token.expires_at = expires_at;
		this.token.expires_in = expires_in;
		this.token.refresh_token = refresh_token;
		this.token.access_token = access_token;
	}
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
}
