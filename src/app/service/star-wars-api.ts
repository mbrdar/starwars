import {Observable} from 'rxjs/Observable';

export interface StarWarsApi {
  getAll(): Observable<any[]>;
  getById(id: number): Observable<any>;
}
