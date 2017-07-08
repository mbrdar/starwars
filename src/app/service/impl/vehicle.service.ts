import {Inject, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Vehicle} from "../../model/vehicle";
import {HelperService} from "../helper.service";
import {StarWarsApi} from "../star-wars-api";

@Injectable()
export class VehicleService implements StarWarsApi {

  constructor(@Inject('API_URL') private apiUrl: string, private http: Http, private helperService: HelperService) {
  }

  getAll(): Observable<Vehicle[]> {
    return this.query(`${this.apiUrl}vehicles`);
  }

  getById(id: number): Observable<Vehicle> {
    return this.query(`${this.apiUrl}vehicles/${id}`);
  }

  private query(url: string): Observable<any> {
    return this.http.get(url)
      .map((response: any) => <Vehicle[]> response.json())
      .map((response: Vehicle & Vehicle[]) => {
        return this.helperService.createCorrectImagePath(this.apiUrl, response)
      });
  }
}
