import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
	#token!: Token;
	#queryParams!: QueryParams;
	constructor(
		private http: HttpClient,
		private interactionService: InteractionService,
		private router: Router
	) {}
	/**
	 * @description Petición de permisos a Strava
	 * Le marcamos a que URL tiene que volver en el redirect_url
	 */
	initSession() {
		let url = new URL('http://www.strava.com/oauth/authorize');
		url.searchParams.append('client_id', environment.client_id);
		url.searchParams.append('redirect_uri', 'http://localhost:4200/token');
		url.searchParams.append('response_type', 'code');
		url.searchParams.append('approval_prompt', 'auto'); //force
		url.searchParams.append(
			'scope',
			'read,read_all,profile:read_all,activity:read,activity:read_all'
		);
		url.searchParams.append('state', 'login');
		window.location.href = url.toString();
	}
	/**
	 * @description Devolvemos los parametros recogidos en la respuesta de strava cuando nos autenticamos
	 * @returns {QueryParams}
	 */
	getQueryParams(): QueryParams {
		return this.#queryParams ?? null;
	}
	setQueryParams(params: Params) {
		this.#queryParams = { ...params.keys, ...params };
	}

	/**
	 * @description Quitamos los permisos de acceso al usuario que esta navegando
	 * @returns
	 */
	deauthorize() {
		// TODO Esta a medias, falta mirar doc para saber como cerrar el token de trabajo
		const headers = new HttpHeaders().append(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);

		const body: any = {};

		const params = new HttpParams();
		// .append('client_id', environment.client_id)
		// .append('client_secret', environment.client_secret)
		// .append('code', code)
		// .append('grant_type', 'authorization_code');
		console.warn('deauthorize');
		return this.interactionService.post(
			'https://www.strava.com/oauth/deauthorize',
			body,
			headers,
			params
		);
	}
	/**
	 * @description Devuelve el token de acceso a strava
	 * @returns {Token}
	 */
	getToken(): Token {
		//TODO meter esto en un interceptor
		if (this.#token != null) {
			if (Object.keys(this.#token).length === 0) {
				// TODO Error personalizado de token vacio
				this.router.navigate(['token']);
				return this.#token;
			}
			if (this.#token.expires_in <= 0) {
				// TODO Errores personalizado de token expirado
				this.router.navigate(['token']);
				return this.#token;
			}
		}
		console.warn('getToken');

		return this.#token;
	}
	/**
	 * @description Establece el token que usaremos las llamadas hacia la API de Strava
	 * @param {string} token_type
	 * @param {number} expires_at
	 * @param {number} expires_in
	 * @param {string} refresh_token
	 * @param {string} access_token
	 */
	setToken(
		token_type: string,
		expires_at: number,
		expires_in: number,
		refresh_token: string,
		access_token: string
	) {
		this.#token.token_type = token_type;
		this.#token.expires_at = expires_at;
		this.#token.expires_in = expires_in;
		this.#token.refresh_token = refresh_token;
		this.#token.access_token = access_token;
		console.warn('setToken');
	}
	existSession(): boolean {
		console.log(this.#token);
		console.log(this.#token !== undefined);
		return this.#token !== undefined;
	}
	/**
	 * @description Guarda el token en local para prevenir el F5 y poder hacer el refresh token
	 * @private
	 * @param {Token} token
	 */
	private saveTokenLocal(token: Token): void {
		console.warn('saveTokenLocal');
		localStorage.setItem('token', JSON.stringify(token));
	}
	/**
	 * @description Refrescamos el token de Strava
	 * @param {string} code
	 * @returns {Observable<Welcome>}
	 */
	refreshToken(code: string): Observable<Welcome> {
		const headers = new HttpHeaders().append(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);
		console.warn('refreshToken');
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
