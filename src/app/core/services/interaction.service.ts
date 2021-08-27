import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class InteractionService {
	constructor(private http: HttpClient) {}
	// get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
	// 	return this._http.get(`${environment.api_url}${path}`, { params });
	// }

	// put(path: string, body: Object = {}): Observable<any> {
	// 	return this._http.put(`${environment.api_url}${path}`, JSON.stringify(body));
	// }

	post<T>(
		url: string,
		body: any = {},
		headers: HttpHeaders = new HttpHeaders(),
		params: HttpParams = new HttpParams()
	): Observable<T> {
		return this.http.post<T>(url, body, {
			headers: headers,
			params: params,
		});
	}

	// delete(path): Observable<any> {
	// 	return this._http.delete(`${environment.api_url}${path}`);
	// }
}
