import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenComponent } from './components/token/token.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '', pathMatch: 'full' },
	{ path: 'token', component: TokenComponent },
	{ path: 'athlete', component: AthleteComponent },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
