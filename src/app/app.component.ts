import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization/authorization.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'StravaCleaner';
   
  constructor(private _auth: AuthorizationService) {
    this._auth.getAuthorization();    
  }
  
}