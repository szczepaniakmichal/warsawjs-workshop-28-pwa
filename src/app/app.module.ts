import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '/component/app./app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageMovieProfileComponent } from './page-movie-profile/page-movie-profile.component';
import { MenuComponent } from './menu/menu.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieProfileComponent } from './movie-profile/movie-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageMovieProfileComponent,
    MenuComponent,
    MovieListComponent,
    MovieListItemComponent,
    MovieProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
