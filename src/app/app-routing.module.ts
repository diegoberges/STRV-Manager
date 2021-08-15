import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { OauthComponent } from './components/oauth/oauth.component';

const routes: Routes = [
  { path: '', redirectTo: 'oauth', pathMatch: 'full'},
  { path: 'oauth', component: OauthComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: '**', redirectTo: 'oauth'}
  // { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
