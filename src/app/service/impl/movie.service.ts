import {Inject, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/concatAll";
import {Movie} from "app/model/movie";
import {StarWarsApi} from "../star-wars-api";

@Injectable()
export class MovieService implements StarWarsApi {

  constructor(@Inject('API_URL') private apiUrl: string, private http: Http) {
  }

  getAll(): Observable<Movie[]> {
    return this.query(`${this.apiUrl}films`);
  }

  getById(id: number): Observable<Movie> {
    return this.query(`${this.apiUrl}films/${id}`);
  }

  private query(url: string): Observable<any> {
    return this.http.get(url)
      .map((response: any) => {
      return <Movie[]> response.json()
    });
  }


}
