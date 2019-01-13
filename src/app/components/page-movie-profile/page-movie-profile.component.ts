import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { NullTemplateVisitor } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-page-movie-profile',
  templateUrl: './page-movie-profile.component.html',
  styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit {

  Movie = null;

  constructor(
    private route: ActivatedRoute,
    private movies: MovieService
  ) { }

  ngOnInit() {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log({ id })

    this.movies = this.movies.getMoviesById(id);
  }

}
