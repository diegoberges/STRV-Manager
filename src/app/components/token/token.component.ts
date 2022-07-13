import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryParams } from 'src/app/core/models/api/queryparams.interface';
import { OauthService } from 'src/app/core/services/oauth.service';
@Component({
	selector: 'app-token',
	templateUrl: './token.component.html',
})
export class TokenComponent implements OnInit {
	#params!: QueryParams;
	constructor(
		private route: ActivatedRoute,
		private oauthService: OauthService
	) {}
	ngOnInit(): void {
		console.log('🚀 token');
		this.route.queryParams.subscribe(async (params) => {
			console.log('🚀 params: ', params);
			this.#params = { ...params.keys, ...params };
			this.oauthService.setLocalStorage(this.#params);
		});
	}
}
