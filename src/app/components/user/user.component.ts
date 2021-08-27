import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Athlete } from 'src/app/core/models/athlete.class';
import { Token } from 'src/app/core/models/token.class';
import { Welcome } from 'src/app/core/models/welcome.class';
import { OauthService } from '../../core/services/oauth.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.sass'],
})
export class UserComponent implements OnInit {
	athlete: Athlete = new Athlete();
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _oauth: OauthService
	) {}

	ngOnInit(): void {
		this._route.queryParams.subscribe(async (params) =>
			this._oauth.refreshToken(params.code).subscribe((resp: Welcome) => {
				console.log(resp);
				console.log(resp.athlete);
				this._oauth.setToken(
					new Token(
						resp.token_type,
						resp.expires_at,
						resp.expires_in,
						resp.refresh_token,
						resp.access_token
					)
				);
				this.athlete = resp.athlete;
			})
		);
	}
}
