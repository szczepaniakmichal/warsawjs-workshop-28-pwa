import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';



const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'movies/:id',
    component: MovieListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
