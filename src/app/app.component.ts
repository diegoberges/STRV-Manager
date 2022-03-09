import { Component, OnInit } from '@angular/core';
import { AthleteSummary } from './core/models/athlete-summary.interface';
import { AthleteService } from './components/athlete/athlete.service';
import { OauthService } from './core/services/oauth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParams } from 'src/app/core/models/queryparams.interface';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title: string = 'STRV Manager';
	isCollapsed: boolean = false;
	athlete: AthleteSummary = {} as AthleteSummary;
	#params!: QueryParams;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private oauthService: OauthService,
		private athleteService: AthleteService
	) {}

	ngOnInit() {
		// TODO Leemos si existe cookie
		let x = document.cookie;
		if (x != '') {
			console.warn('Rellenamos perfil con el welcome y al athlete');
			console.log(x);
		} else {
			console.warn('initSession()');
			this.oauthService.initSession();
		}
	}
}
