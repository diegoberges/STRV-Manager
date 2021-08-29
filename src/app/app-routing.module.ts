import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenComponent } from './components/token/token.component';
import { OauthComponent } from './components/oauth/oauth.component';
import { AthleteComponent } from './components/athlete/athlete.component';

const routes: Routes = [
	{ path: '', redirectTo: 'oauth', pathMatch: 'full' },
	{ path: 'oauth', component: OauthComponent },
	{ path: 'token', component: TokenComponent },
	{ path: 'athlete', component: AthleteComponent },
	{ path: '**', redirectTo: 'oauth' },
	// { path: 'user', component: UserComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
