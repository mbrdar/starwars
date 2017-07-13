import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Character} from "app/model/character";
import {CharacterService} from "app/service/impl/chatacter.service";
import 'rxjs/add/operator/map';
import {VehicleService} from "app/service/impl/vehicle.service";
import {Vehicle} from "../model/vehicle";
import {Starship} from "../model/starship";
import {StarshipService} from "app/service/impl/starship.service";
import {Movie} from "app/model/movie";
import {MovieService} from "../service/impl/movie.service";

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  character: Character;
  vehicles = Array<Vehicle>();
  starships = Array<Starship>();
  movies = Array<Movie>();

  constructor(private route: ActivatedRoute, private characterService: CharacterService,
              private vehicleService: VehicleService, private starshipService: StarshipService,
              private movieService: MovieService) {
    route.params.subscribe((params: Params) => {
      this.characterService.getById(params['id'])
        .subscribe((character: Character) => {
          this.getAllCharacterVehicles(character.vehicles);
          this.getAllCharacterStarships(character.starships);
          this.getAllCharacterMovies(character.films);
          this.character = character;
        });
    });
  }

  private getAllCharacterVehicles(vehicles: Array<number>) {
    for (let vehicleId of vehicles) {
      this.vehicleService.getById(vehicleId).subscribe((vehicle: Vehicle) => {
        this.vehicles.push(vehicle);
      });
    }
  };

  private getAllCharacterStarships(starships: Array<number>) {
    for (let starshipId of starships) {
      this.starshipService.getById(starshipId).subscribe((starship: Starship) => {
        this.starships.push(starship);
      });
    }
  };

  private getAllCharacterMovies(movies: Array<number>) {
    for (let movieId of movies) {
      this.movieService.getById(movieId).subscribe((movie: Movie) => {
        this.movies.push(movie);
      });
    }
  }
}
