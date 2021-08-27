import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Athlete } from 'src/app/core/models/athlete.class';
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
		this._route.queryParams.subscribe((params) =>
			this._oauth.refreshToken(params.code).subscribe((resp: Welcome) => {
				console.log(resp);
				console.log(resp.athlete);
				this.athlete = resp.athlete;
			})
		);
	}
}
