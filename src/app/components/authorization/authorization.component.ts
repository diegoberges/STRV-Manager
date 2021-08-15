import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Token } from 'src/app/models/Token';
import { OauthService } from '../../services/oauth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.sass']
})
export class AuthorizationComponent implements OnInit {
  
  constructor(private _route: ActivatedRoute, 
              private _router: Router,
              private _oauth: OauthService) { }

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => {
        console.log(params)
        // const token: Token = params;
        // this._authService.SetToken(params.scope, params.code, params.state)
        this._oauth.refreshToken(params.code)
      }
    );
    
    // this._authService.refreshToken(this._authService.getToken().code)
      
    // stop()
  }

}
