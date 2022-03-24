import { Component, OnInit } from '@angular/core';
import { SummaryAthlete } from './core/models/strava/summary-athlete.interface';
import { OauthService } from './core/services/oauth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from './core/utils/constants';
import { Token } from './core/models/api/token.interface';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title: string = 'STRV Manager';
	isCollapsed: boolean = true;
	athlete: SummaryAthlete = {} as SummaryAthlete;
	#token!: Token;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private oauthService: OauthService
	) {}

	ngOnInit() {
		if (this.oauthService.checkCookie()) {
			this.oauthService
				.refreshToken(this.oauthService.getCookieParameter(Constants.CODE))
				.subscribe((resp) => {
					this.athlete = resp.athlete;

					this.oauthService.setToken(
						resp.token_type,
						resp.expires_at,
						resp.expires_in,
						resp.refresh_token,
						resp.access_token
					);

					this.router.navigate(['athlete']);
				});
		} else {
			this.oauthService.initSession();
		}
	}
}
