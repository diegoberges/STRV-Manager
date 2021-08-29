import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Athlete } from 'src/app/core/models/athlete.class';
import { Token } from 'src/app/core/models/token.class';
import { Welcome } from 'src/app/core/models/welcome.class';
import { OauthService } from '../../core/services/oauth.service';

@Component({
	selector: 'app-token',
	templateUrl: './token.component.html',
})
export class TokenComponent implements OnInit {
	athlete: Athlete = new Athlete();
	constructor(
		private route: ActivatedRoute,
		private oauth: OauthService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe(async (params) =>
			this.oauth.refreshToken(params.code).subscribe((resp: Welcome) => {
				this.oauth.setToken(
					new Token(
						resp.token_type,
						resp.expires_at,
						resp.expires_in,
						resp.refresh_token,
						resp.access_token
					)
				);

				this.router.navigate(['athlete']);
			})
		);
	}
}
