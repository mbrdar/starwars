import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsComponent } from './character-details.component';
import {ActivatedRoute, provideRoutes, Routes, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

xdescribe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;

  const mockRoutes: Routes = [
    {path: '', redirectTo: 'characters', pathMatch: 'full'},
    {path: 'characters/:id', component: CharacterDetailsComponent}
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
      providers: [
        {
          provide: ActivatedRoute,
          useFactory: (r: Router) => r.routerState.root,
          deps: [Router]
        }
      ],
      declarations: [ CharacterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
