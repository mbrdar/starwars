import {Component, OnInit} from '@angular/core';
import {Starship} from "../model/starship";
import {ActivatedRoute} from "@angular/router";
import {StarshipService} from "../service/impl/starship.service";

@Component({
  selector: 'starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent {

  starship: Starship;

  constructor(private route: ActivatedRoute, private starshipService: StarshipService) {
    route.params.subscribe((params) => {
      starshipService.getById(params['id']).subscribe((starship: Starship) => {
        this.starship = starship;
      });
    });
  }
}
