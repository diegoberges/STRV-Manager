import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteComponent } from './components/athlete/athlete.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'athlete', component: AthleteComponent },
  { path: '**', component: LoginComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
