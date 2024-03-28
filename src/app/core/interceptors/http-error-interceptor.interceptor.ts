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
import { Constants } from '../utils/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private oauthService: OauthService,
    private router: Router,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
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
        const token = this.oauthService.getToken();
        if (!token) {
          console.error('No token');
        }

        if (error.status === Errors.BadRequest) {
          console.warn('Error 400');
          console.error(error.status);
          this.router.navigate([Constants.ROUTE_LOGIN]);
        }
        if (error.status === Errors.Unauthorized) {
          console.warn('Error 401');
          console.error(error.status);
          this.router.navigate([Constants.ROUTE_LOGIN]);
        }
        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
        // this.errorService.show(errorMessage);
        return throwError(() => errorMessage);
      }),
    );
  }
}
