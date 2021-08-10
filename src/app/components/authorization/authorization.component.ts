import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService } from '../../services/authorization/authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.sass']
})
export class AuthorizationComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, 
              private _authService: AuthorizationService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {

        this._authService.SetToken(params.scope, params.code, params.state);

        console.log(this._authService.getToken());
        stop()
      }
    );
  }

}
