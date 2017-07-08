import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/impl/movie.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Movie} from "../model/movie";

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movie: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      movieService.getById(params['id'])
        .subscribe((movie: Movie) => {
          this.movie = movie;
        });
    });
  }
}
