import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { TokenComponent } from './components/token/token.component';
import { OauthComponent } from './components/oauth/oauth.component';
// Interceptors
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor.interceptor';
import { AthleteComponent } from './components/athlete/athlete.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(es);
@NgModule({
	declarations: [
		AppComponent,
		TokenComponent,
		OauthComponent,
		AthleteComponent,
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
		{ provide: NZ_I18N, useValue: es_ES },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
