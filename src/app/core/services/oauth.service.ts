import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { InteractionService } from './interaction.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Token } from '../models/token.interface';
import { QueryParams } from '../models/queryparams.interface';
import { Welcome } from '../models/welcome.interface';
import { CookieService } from 'ngx-cookie-service';
import { Constants } from '../utils/constants';
@Injectable({
	providedIn: 'root',
})
export class OauthService {
	#token: Token = {} as Token;
	constructor(
		private interactionService: InteractionService,
		private router: Router,
		private cookieService: CookieService
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
		window.location.href = url.toString();
	}
	setCookie(params: QueryParams): void {
		// TODO Encryptar y rellenar el maximo de datos de la cookie
		this.cookieService.set(Constants.STATE, params.state, {
			expires: 2,
			sameSite: Constants.STRICT,
		});
		this.cookieService.set(Constants.CODE, params.code, {
			expires: 2,
			sameSite: Constants.STRICT,
		});
		this.cookieService.set(Constants.SCOPE, params.scope, {
			expires: 2,
			sameSite: Constants.STRICT,
		});
		// set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: 'Lax' | 'None' | 'Strict'):
	}
	/**
	 * @description Devuelve si existe la cookie completa de STRAVA
	 * @returns {boolean}
	 */
	checkCookie(): boolean {
		return (
			this.cookieService.check(Constants.STATE) &&
			this.cookieService.check(Constants.CODE) &&
			this.cookieService.check(Constants.SCOPE)
		);
	}
	/**
	 * @description Devuelve todos los valores de la cookie que creamos para manejar los datos del QueryParams
	 * @returns
	 */
	getCookie(): { [key: string]: string } {
		return this.cookieService.getAll();
	}
	/**
	 * @description Devuleve el valor del parametro de la cookie solicitada
	 * @param {string} parametro
	 * @returns
	 */
	getCookieParameter(parametro: string): string {
		return this.cookieService.get(parametro);
	}
	/**
	 * @description Borra todas las cookies
	 */
	deleteCookie(): void {
		this.cookieService.deleteAll();
		this.router.navigate(['']).then(() => window.location.reload);
	}
	/**
	 * @description Borra el parametro que le pasemos de la cookie
	 * @param {string} parametro
	 */
	deleteCookieParameter(parametro: string): void {
		this.cookieService.delete(parametro);
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
