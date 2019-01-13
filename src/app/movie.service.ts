import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMoviesById(id: any): MovieService {
    throw new Error("Method not implemented.");
  }
  

  constructor() {
    getMoviesById(id:any):Movie{
      const movie = this.getMovies();
      return MovieService.find((movie) => {
        return movie      }) 
    }
   }
}
