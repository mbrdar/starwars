import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../service/impl/chatacter.service";
import {Character} from "../model/character";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatAll';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  characters: Array<Character>;
  results;
  constructor(private characterService: CharacterService) {
    characterService.getAll().subscribe((charachters: Character[]) => {
      this.results = charachters;
    });
  }
}
