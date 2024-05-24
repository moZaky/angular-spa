import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './movies/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movies/movie.service';
import { DetailsComponent } from './movies/details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    NotFoundComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
