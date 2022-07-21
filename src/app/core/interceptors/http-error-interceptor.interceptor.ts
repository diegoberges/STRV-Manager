import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { throwError, Observable, catchError } from 'rxjs';
import { Errors } from '../enums/errors';
import { OauthService } from '../services/oauth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private oauthService: OauthService) {}

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

        if (error.status === Errors.BadRequest) {
          this.oauthService.clear();
          console.warn('Error 400');
          console.error(error.status);
        }
        if (error.status === Errors.Unauthorized) {
          this.oauthService.clear();
          console.warn('Error 401');
          console.error(error.status);
        }
        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
        // this.errorService.show(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
