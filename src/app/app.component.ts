import { Component, OnInit } from '@angular/core';
import { SummaryAthlete } from './core/models/strava/summary-athlete.interface';
import { OauthService } from './core/services/oauth.service';
import { Router } from '@angular/router';
import { Constants } from './core/utils/constants';
import { TranslateService } from '@ngx-translate/core';
import { LanguajeType } from './core/enums/languaje-type';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	isCollapsed: boolean = true;
	athlete: SummaryAthlete = {} as SummaryAthlete;
	constructor(
		private router: Router,
		private oauthService: OauthService,
		private translateService: TranslateService
	) {
		console.log('🚀 vercel');
	}

	ngOnInit() {
		console.log('🚀 app');
		this.translateService.setDefaultLang(LanguajeType.Spanish);

		if (this.oauthService.checkLocalStorage()) {
			this.oauthService
				.refreshToken(this.oauthService.getItem(Constants.CODE))
				.subscribe((resp) => {
					this.athlete = resp.athlete;

					this.oauthService.setToken(
						resp.token_type,
						resp.expires_at,
						resp.expires_in,
						resp.refresh_token,
						resp.access_token
					);

					this.router.navigate([Constants.ROUTE_ATHLETE]);
				});
		} else {
			console.log('🚀 init sesion()');
			this.oauthService.initSession();
		}
	}
}
