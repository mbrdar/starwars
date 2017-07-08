import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/impl/movie.service";
import {Movie} from "../model/movie";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: Movie[];

  constructor(private movieService: MovieService) {
    this.movieService.getAll()
      .subscribe((movies: Movie[]) => {
        this.movies = movies;
      })
  }
}
