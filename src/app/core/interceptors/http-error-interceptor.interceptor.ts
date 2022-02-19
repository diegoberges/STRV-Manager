import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { Errors } from '../enums/errors';
import { OauthService } from '../services/oauth.service';

@Injectable({
	providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
	constructor(private _oauth: OauthService) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((error) => {
				let errorMessage = '';
				if (error instanceof ErrorEvent) {
					// client-side error
					errorMessage = `Client-side error: ${error.error.message}`;
				} else {
					// backend error
					errorMessage = `Server-side error: ${error.status} ${error.error.message}`;
				}
				//TODO aquí se abrirá la ventana de gestión de errores
				console.log(error);
				console.log(errorMessage);

				if (error.status === Errors.BadRequest) {
					this._oauth.getRequestAccessUrl();
				}
				if (error.status === Errors.Unauthorized) {
					this._oauth.getRequestAccessUrl();
				}
				// aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
				// this.errorService.show(errorMessage);
				return throwError(errorMessage);
			})
		);
	}
}
