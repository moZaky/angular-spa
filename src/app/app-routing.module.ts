import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './movies/list/list.component';
import { DetailsComponent } from './movies/details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: ListComponent,  },
  { path: 'list', component: ListComponent,pathMatch:"full" },
  { path: 'details/:id', component: DetailsComponent },
  { path: '500', component: ErrorComponent }
  // { path: '**', component: NotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
