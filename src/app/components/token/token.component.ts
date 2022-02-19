import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParams } from 'src/app/core/models/queryparams.interface';
import { Welcome } from 'src/app/core/models/welcome.interface';
import { OauthService } from 'src/app/core/services/oauth.service';

@Component({
	selector: 'app-token',
	templateUrl: './token.component.html',
})
export class TokenComponent implements OnInit {
	#params: QueryParams | undefined;
	constructor(
		private route: ActivatedRoute,
		private oauthService: OauthService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((p) => {
			this.#params = this.oauthService.getQueryParams(p);
		});

		if (this.#params != null) {
			this.oauthService
				.refreshToken(this.#params.code)
				.subscribe((resp: Welcome) => {
					this.oauthService.setToken(
						resp.token_type,
						resp.expires_at,
						resp.expires_in,
						resp.refresh_token,
						resp.access_token
					);

					if (this.oauthService.getToken().access_token != null) {
						this.router.navigate(['athlete']);
					}
				});
		}
	}
}
