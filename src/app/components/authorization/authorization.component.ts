import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OauthService } from '../../core/services/oauth.service';

@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.sass'],
})
export class AuthorizationComponent implements OnInit {
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _oauth: OauthService
	) {}

	ngOnInit(): void {
		this._route.queryParams.subscribe((params) =>
			this._oauth.refreshToken(params.code)
		);
	}
}
