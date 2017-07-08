import {TestBed, inject, fakeAsync, tick} from '@angular/core/testing';

import {MockBackend} from '@angular/http/testing';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';

import {MovieService} from './movie.service';
import {Movie} from "app/model/movie";

describe('MovieService', () => {

  let moviesResponse = [
    {
      "producer": "Gary Kurtz, Rick McCallum",
      "title": "A New Hope",
      "director": "George Lucas",
      "release_date": "1977-05-25",
      "id": 1
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MovieService,
        MockBackend,

        {
          provide: Http,
          useFactory: (backend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {provide: 'API_URL', useValue: 'https://starwars-json-server-ewtdxbyfdz.now.sh/'}
      ]
    });
  });

  describe('getAll', () => {
    it('should return list of all movies',
      inject([MovieService, MockBackend], fakeAsync((movieService, mockBackend) => {
        var res: Movie[];
        mockBackend.connections.subscribe(c => {
          expect(c.request.url).toBe('https://starwars-json-server-ewtdxbyfdz.now.sh/films');
          let response = new ResponseOptions({body: moviesResponse});
          c.mockRespond(new Response(response));
        });
        movieService.getAll().subscribe((response: Movie[]) => {
          res = response;
        });
        tick();
        expect(res).toEqual(moviesResponse);
      }))
    );
  });

  describe('getById', () => {
    it('should return movie by id',
      inject([MovieService, MockBackend], fakeAsync((movieService, mockBackend) => {
        var res: Movie[];
        mockBackend.connections.subscribe(c => {
          expect(c.request.url).toBe('https://starwars-json-server-ewtdxbyfdz.now.sh/films/1');
          let response = new ResponseOptions({body: moviesResponse[0]});
          c.mockRespond(new Response(response));
        });
        movieService.getById(1).subscribe((response: Movie[]) => {
          res = response;
        });
        tick();
        expect(res).toEqual(moviesResponse[0]);
      }))
    );
  });

});
