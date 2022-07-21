import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './app.component';
import { TokenComponent } from './components/token/token.component';
import { BreadcrumbComponent } from './components/ui/breadcrumb/breadcrumb.component';
import { GridComponent } from './components/ui/grid/grid.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import { StatsComponent } from './components/ui/stats-component/stats.component';
import { StatComponentComponent } from './components/ui/stat-component/stat-component.component';
// Interceptors
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor.interceptor';
//Locale
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
// Modules
import { NgZorroAntdModule } from './core/modules/ng-zorro-antd.module';
//Translation
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent,
    TokenComponent,
    AthleteComponent,
    BreadcrumbComponent,
    GridComponent,
    PageNotFoundComponent,
    StatsComponent,
    StatComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
