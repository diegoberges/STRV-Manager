import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { InteractionService } from './interaction.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Token } from '../models/api/token.interface';
import { QueryParams } from '../models/api/queryparams.interface';
import { Welcome } from '../models/api/welcome.interface';
import { Constants } from '../utils/constants';
@Injectable({
	providedIn: 'root',
})
export class OauthService {
	#token: Token = {} as Token;
	constructor(
		private interactionService: InteractionService,
		private router: Router
	) {}
	/**
	 * @description Petición de permisos a Strava
	 * Le marcamos a que URL tiene que volver en el redirect_url
	 */
	initSession() {
		let url = new URL(Constants.STRV_OAUTH + Constants.ENDPOINT_AUTHORIZE);
		url.searchParams.append(Constants.CLIENT_ID, environment.client_id);
		url.searchParams.append(
			Constants.REDIRECT_URI,
			environment.url + Constants.ENDPOINT_TOKEN
		);
		url.searchParams.append(Constants.RESPONSE_TYPE, Constants.CODE);
		url.searchParams.append(Constants.APPROVAL_PROMPT, Constants.AUTO);
		url.searchParams.append(Constants.SCOPE, Constants.SCOPE_PARAMS);
		url.searchParams.append(Constants.STATE, Constants.LOGIN);
		console.log('url ', url.toString());
		window.location.href = url.toString();
	}
	setLocalStorage(params: QueryParams): void {
		localStorage.setItem(Constants.STATE, params.state);
		localStorage.setItem(Constants.CODE, params.code);
		localStorage.setItem(Constants.SCOPE, params.scope);
	}
	/**
	 * @description Devuelve si existe el code de conexion a STRAVA
	 * @returns {boolean}
	 */
	checkLocalStorage(): boolean {
		return localStorage.getItem(Constants.CODE) != null;
	}
	/**
	 * @description Devuelve el valor del item buscado en el localstorage
	 * @returns
	 */
	getItem(item: string): string {
		return localStorage.getItem(item) ?? '';
	}
	/**
	 * @description Borra todo el localstorage
	 */
	clear(): void {
		localStorage.clear();
		location.href = '/';
	}
	/**
	 * @description Quitamos los permisos de acceso al usuario que esta navegando
	 * @returns
	 */
	deauthorize() {
		// TODO Esta a medias, falta mirar doc para saber como cerrar el token de trabajo
		const headers = new HttpHeaders().append(
			Constants.HTTP_HEADERS_CONTENT_TYPE,
			Constants.HTTP_HEADERS_X_WWW_FORM_URLENCODED
		);

		const body: any = {};

		const params = new HttpParams();
		// .append('client_id', environment.client_id)
		// .append('client_secret', environment.client_secret)
		// .append('code', code)
		// .append('grant_type', 'authorization_code');
		console.warn('deauthorize');
		return this.interactionService.post(
			Constants.STRV_OAUTH + Constants.ENDPOINT_DEAUTHORIZE,
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
	}
	/**
	 * @description Devuelve si el token actual existe
	 * @returns {boolean}
	 */
	tokenExist(): boolean {
		return (
			this.#token != null &&
			Object.keys(this.#token).length > 0 &&
			this.#token.expires_in > 0
		);
	}
	/**
	 * @description Refrescamos el token de Strava
	 * @param {string} code
	 * @returns {Observable<Welcome>}
	 */
	refreshToken(code: string): Observable<Welcome> {
		const headers = new HttpHeaders().append(
			Constants.HTTP_HEADERS_CONTENT_TYPE,
			Constants.HTTP_HEADERS_X_WWW_FORM_URLENCODED
		);
		const body: any = {};

		const params = new HttpParams()
			.append(Constants.CLIENT_ID, environment.client_id)
			.append(Constants.CLIENT_SECRET, environment.client_secret)
			.append(Constants.CODE, code)
			.append(Constants.GRANT_TYPE, Constants.AUTHORIZATION_CODE);

		return this.interactionService.post<Welcome>(
			Constants.STRV_OAUTH + Constants.ENDPOINT_TOKEN,
			body,
			headers,
			params
		);
	}
}
