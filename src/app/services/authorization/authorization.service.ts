import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAuthorization } from 'src/app/interfaces/IAuthorization';
import { DTOAuthorization } from 'src/app/Classes/DTOAuthorization';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private _token: DTOAuthorization = new DTOAuthorization()

  getAuthorization(){

    let url= new URL(environment.API_URL_AUTH);
        url.searchParams.set('client_id', environment.client_id)
        url.searchParams.set('response_type', 'code')
        url.searchParams.set('redirect_uri', environment.URL + '/authorization')
        url.searchParams.set('approval_prompt', 'force')
        url.searchParams.set('scope', 'read_all');

      window.location.href = url.toString();
  }

  SetToken(scope: string, code: string, state: string){
    this._token.setScope(scope);
    this._token.setCode(code);
    this._token.setState(state);
  }

  getToken() : DTOAuthorization{
    return this._token;
  }
}
