import {Inject, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/concatAll";
import {HelperService} from "../helper.service";
import {Starship} from "../../model/starship";
import {StarWarsApi} from "../star-wars-api";

@Injectable()
export class StarshipService implements StarWarsApi {

  constructor(@Inject('API_URL') private apiUrl: string, private http: Http, private helperService: HelperService) {
  }

  getAll(): Observable<Starship[]> {
    return this.query(`${this.apiUrl}starships`);
  }

  getById(id: number): Observable<Starship> {
    return this.query(`${this.apiUrl}starships/${id}`);
  }

  private query(url: string): Observable<any> {
    return this.http.get(url)
      .map((response: any) => <Starship[]> response.json())
      .map((response: Starship & Starship[]) => {
        return this.helperService.createCorrectImagePath(this.apiUrl, response)
      });
  }

}
