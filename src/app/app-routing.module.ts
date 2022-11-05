import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescrpageComponent } from './descrpage/descrpage.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path: 'descrpage/:id', component: DescrpageComponent},
  {path:'', component:MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
