import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Token } from 'src/app/core/models/token.class';
import { Welcome } from 'src/app/core/models/welcome.class';
import { OauthService } from '../../core/services/oauth.service';
import { QueryParams } from '../../core/models/queryparams.class';

@Component({
	selector: 'app-token',
	templateUrl: './token.component.html',
})
export class TokenComponent implements OnInit {
	params: QueryParams = new QueryParams();
	constructor(
		private route: ActivatedRoute,
		private oauthService: OauthService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((p) => {
			this.params = this.oauthService.getQueryParams(p);
		});

		this.oauthService
			.refreshToken(this.params.code)
			.subscribe((resp: Welcome) => {
				this.oauthService.setToken(
					new Token(
						resp.token_type,
						resp.expires_at,
						resp.expires_in,
						resp.refresh_token,
						resp.access_token
					)
				);
				this.router.navigate(['athlete']);
			});
	}
}
