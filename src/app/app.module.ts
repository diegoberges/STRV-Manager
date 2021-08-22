import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { OauthComponent } from './components/oauth/oauth.component';
// Interceptors
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor.interceptor';
@NgModule({
	declarations: [AppComponent, AuthorizationComponent, OauthComponent],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
