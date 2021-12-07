import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/core/services/oauth.service';

@Component({
	selector: 'app-oauth',
	templateUrl: './oauth.component.html',
	styleUrls: ['./oauth.component.scss'],
})
export class OauthComponent implements OnInit {
	constructor(private _oatuh: OauthService) {}

	ngOnInit(): void {
		this._oatuh.getRequestAccessUrl();
	}
}
