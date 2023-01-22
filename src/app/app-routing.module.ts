import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescrpageComponent } from './descrpage/descrpage.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path: 'descrpage/:id', component: DescrpageComponent},
  {path:'', component:MovieListComponent}
import { HomepageComponent } from './logged-in/homepage/homepage.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoginComponent } from './login/login.component';
import { DescrpageComponent } from './logged-in/descrpage/descrpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'loggedIn', component: LoggedInComponent,
children:
[
  {path: 'home', component: HomepageComponent},
  {path: 'descrpage/:id', component: DescrpageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
] },
{ path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
