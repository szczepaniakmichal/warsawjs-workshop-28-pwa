import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  movieList: Movie

  constructor(
    private movies: MovieService
  ) { }

  ngOnInit() {
    this.movies
  }

  ngOnDestroy(){
    console.log("destroy")
  }

}
