import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CharactersComponent} from "./characters.component";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute, provideRoutes, Router, Routes} from "@angular/router";
import {Character} from "../model/character";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Injectable} from "@angular/core";
import {CharacterService} from "../service/impl/chatacter.service";

class MockCharacterService {
  getAll() {
    let characters = [new Character({name: 'Han Solo'}), new Character({name: 'Luke Skywalker'})];
    return Observable.of(characters);
  }
}

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  const mockRoutes: Routes = [
    {path: '', redirectTo: 'characters', pathMatch: 'full'},
    {path: 'characters', component: CharactersComponent}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        {
          ngModule: RouterTestingModule,
          providers: [
            provideRoutes(mockRoutes)
          ]
        }
      ],
      declarations: [CharactersComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useFactory: (r: Router) => r.routerState.root,
          deps: [Router]
        },
        {
          provide: CharacterService,
          useClass: MockCharacterService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // console.log(component.results);
  });
});
