import { TestBed, inject } from '@angular/core/testing';

import { StarshipService } from './starship.service';

xdescribe('StarshipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarshipService]
    });
  });

  it('should ...', inject([StarshipService], (service: StarshipService) => {
    expect(service).toBeTruthy();
  }));
});
