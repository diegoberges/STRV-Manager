import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constants } from '../utils/constants';

@Injectable({
	providedIn: 'root',
})
export class InteractionService {
	#url: string;
	constructor(private http: HttpClient) {
		this.#url = Constants.STRV_API;
	}
	get<T>(
		endpoint: string,
		headers: HttpHeaders = new HttpHeaders(),
		parameters?: HttpParams
	): Observable<T> {
		return this.http.get<T>(`${this.#url}${endpoint}`, {
			headers: headers,
			params: parameters,
		});
	}

	// put(path: string, body: Object = {}): Observable<any> {
	// 	return this._http.put(`${environment.api_url}${path}`, JSON.stringify(body));
	// }

	post<T>(
		url?: string,
		body: any = {},
		headers: HttpHeaders = new HttpHeaders(),
		params: HttpParams = new HttpParams(),
		endpoint: string = ''
	): Observable<T> {
		if (url === null) {
			url = this.#url;
		}
		return this.http.post<T>(`${url}${endpoint}`, body, {
			headers: headers,
			params: params,
		});
	}

	// delete(path): Observable<any> {
	// 	return this._http.delete(`${environment.api_url}${path}`);
	// }
}
