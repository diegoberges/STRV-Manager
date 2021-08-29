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
@NgModule({
	declarations: [
		AppComponent,
		TokenComponent,
		OauthComponent,
		AthleteComponent,
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
