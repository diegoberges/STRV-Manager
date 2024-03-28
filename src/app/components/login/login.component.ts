import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { QueryParams } from 'src/app/core/models/api/queryparams.interface';
import { Welcome } from 'src/app/core/models/api/welcome.interface';
import { SummaryAthlete } from 'src/app/core/models/strava/summary-athlete.interface';
import { OauthService } from 'src/app/core/services/oauth.service';
import { Constants } from 'src/app/core/utils/constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  #params!: QueryParams;
  athlete: SummaryAthlete = {} as SummaryAthlete;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private oauthService: OauthService,
  ) {
    this.route.queryParams
      .pipe(filter((x) => Object.keys(x).length > 0))
      .subscribe((params) => {
        this.#params = { ...params.keys, ...params };
        this.oauthService.setLocalStorage(this.#params);

        this.setRefreshToken();
      });
  }

  goToLogin() {
    this.oauthService.initSession();
  }

  private setRefreshToken(): void {
    this.oauthService
      .refreshToken(this.oauthService.getItem(Constants.CODE))
      .subscribe((resp) => {
        console.log('🚀 ~ resp', resp);
        // this.athlete = resp.athlete;

        this.oauthService.setToken(
          resp.token_type,
          resp.expires_at,
          resp.expires_in,
          resp.refresh_token,
          resp.access_token,
        );
        this.router.navigate([Constants.ROUTE_ATHLETE]);
      });
  }
}
