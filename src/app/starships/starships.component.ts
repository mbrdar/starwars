import {Component, OnInit} from '@angular/core';
import {StarshipService} from "../service/impl/starship.service";
import {Starship} from "../model/starship";

@Component({
  selector: 'starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent {

  starships: Array<Starship>;

  constructor(private starshipService: StarshipService) {
    starshipService.getAll()
      .subscribe((starships: Starship[]) => {
        this.starships = starships;
      })
  }
}
