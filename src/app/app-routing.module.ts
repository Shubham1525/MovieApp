import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './logged-in/homepage/homepage.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'loggedIn', component: LoggedInComponent,
children:
[
  {path: 'home', component: HomepageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
] },
{ path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
