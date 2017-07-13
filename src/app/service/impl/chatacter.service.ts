import {Inject, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/concatAll";

import {StarWarsApi} from "../star-wars-api";
import {Character} from "../../model/character";
import {HelperService} from "../helper.service";

@Injectable()
export class CharacterService implements StarWarsApi {

  characters$: Observable<Character[]>;

  constructor(@Inject('API_URL') private apiUrl: string, private http: Http, private helperService: HelperService) {
  }

  getAll(): Observable<Character[]> {
    this.characters$ = this.query(`${this.apiUrl}people`);
    return this.characters$;
  }

  getById(id: number): Observable<Character> {
    return this.query(`${this.apiUrl}people/${id}`);
  }

  private query(url: string): Observable<any> {
    return this.http.get(url)
      .map((response: any) => <Character[]> response.json())
      .map((response: Character[] & Character) => {
        return this.helperService.createCorrectImagePath(this.apiUrl, response);
      });
  }


}
