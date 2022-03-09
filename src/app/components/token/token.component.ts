import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParams } from 'src/app/core/models/queryparams.interface';
import { Welcome } from 'src/app/core/models/welcome.interface';
import { OauthService } from 'src/app/core/services/oauth.service';
import { AthleteService } from '../athlete/athlete.service';

@Component({
	selector: 'app-token',
	templateUrl: './token.component.html',
})
export class TokenComponent implements OnInit {
	#params!: QueryParams;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private oauthService: OauthService,
		private athleteService: AthleteService
	) {}
	ngOnInit(): void {
		console.error('token');
		this.route.queryParams.subscribe(async (params) => {
			this.#params = { ...params.keys, ...params };
			// TODO Establecemos cookie
			document.cookie = 'code=' + this.#params.code;
		});
	}
}
