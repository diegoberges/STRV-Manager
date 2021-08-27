import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { OauthComponent } from './components/oauth/oauth.component';

const routes: Routes = [
	{ path: '', redirectTo: 'oauth', pathMatch: 'full' },
	{ path: 'oauth', component: OauthComponent },
	{ path: 'user', component: UserComponent },
	{ path: '**', redirectTo: 'oauth' },
	// { path: 'user', component: UserComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
