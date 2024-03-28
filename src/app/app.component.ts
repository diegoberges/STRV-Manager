import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Constants } from './core/utils/constants';
import { TranslateService } from '@ngx-translate/core';
import { LanguajeType } from './core/enums/languaje-type';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private translateService: TranslateService,
  ) {
    this.translateService.setDefaultLang(LanguajeType.Spanish);
    this.preventNavigateInBaseRoute();
  }

  ngOnInit() {
    initFlowbite();
  }

  private preventNavigateInBaseRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        if (currentUrl === Constants.ROUTE_HOME) {
          this.router.navigate([Constants.ROUTE_LOGIN]);
        }
      }
    });
  }
}
