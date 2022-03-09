import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { TokenComponent } from './components/token/token.component';
import { BreadcrumbComponent } from './components/ui/breadcrumb/breadcrumb.component';
import { GridComponent } from './components/ui/grid/grid.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Interceptors
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor.interceptor';
import { AthleteComponent } from './components/athlete/athlete.component';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './core/modules/ng-zorro-antd.module';

registerLocaleData(es);
@NgModule({
	declarations: [
		AppComponent,
		TokenComponent,
		AthleteComponent,
		BreadcrumbComponent,
		GridComponent,
		PageNotFoundComponent,
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
