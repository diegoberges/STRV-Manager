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
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './core/modules/ng-zorro-antd.module';
import { BreadcrumbComponent } from './components/ui/breadcrumb/breadcrumb.component';

registerLocaleData(es);
@NgModule({
	declarations: [
		AppComponent,
		TokenComponent,
		OauthComponent,
		AthleteComponent,
		BreadcrumbComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		NgZorroAntdModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
