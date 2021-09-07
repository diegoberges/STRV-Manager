import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class InteractionService {
	constructor(private http: HttpClient) {}
	get<T>(
		endpoint: string,
		headers: HttpHeaders = new HttpHeaders(),
		url: string = environment.api_url
	): Observable<T> {
		return this.http.get<T>(`${url}${endpoint}`, { headers: headers });
	}

	// put(path: string, body: Object = {}): Observable<any> {
	// 	return this._http.put(`${environment.api_url}${path}`, JSON.stringify(body));
	// }

	post<T>(
		url: string = environment.api_url,
		body: any = {},
		headers: HttpHeaders = new HttpHeaders(),
		params: HttpParams = new HttpParams(),
		endpoint: string = ''
	): Observable<T> {
		return this.http.post<T>(`${url}${endpoint}`, body, {
			headers: headers,
			params: params,
		});
	}

	// delete(path): Observable<any> {
	// 	return this._http.delete(`${environment.api_url}${path}`);
	// }
}
