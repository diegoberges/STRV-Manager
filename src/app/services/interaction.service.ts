import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  API_URL:string = "http://www.strava.com/oauth/authorize"; 
  
  constructor(private http: HttpClient) { }

  getAuthorization(){

    let url= new URL('https://www.strava.com/oauth/authorize');
        url.searchParams.set('client_id', '66122')
        url.searchParams.set('response_type', 'code')
        url.searchParams.set('redirect_uri', 'http://localhost:4200/token')
        url.searchParams.set('approval_prompt', 'force')
        url.searchParams.set('scope', 'read');

      window.location.href = url.toString();
  }

  getConfig() {

    const params = new HttpParams()
      .set('client_id', '66122')
      .set('response_type', 'code')
      .set('redirect_uri', 'http://localhost:4200/exchange_token')
      .set('approval_prompt', 'force')
      .set('scope', 'read');

    // return this.http.get<Any>(this.URL);
    return this.http.get(this.API_URL, { params });
  }

  prepareAuth() {

    const params = new HttpParams()
      .set('client_id', '66122')
      .set('response_type', 'code')
      .set('redirect_uri', 'http://localhost:4200/exchange_token')
      .set('approval_prompt', 'force')
      .set('scope', 'read');

    return this.API_URL;
  }

  getTest() {
    return this.http.get('https://www.strava.com/api/v3/athlete');
  }
}
