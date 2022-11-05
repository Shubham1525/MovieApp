import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescrpageComponent } from './descrpage/descrpage.component';

const routes: Routes = [
  {path: 'descrpage/:id', component: DescrpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
