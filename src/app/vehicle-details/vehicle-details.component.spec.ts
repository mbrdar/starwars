import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from "@angular/core/testing";

import {VehicleDetailsComponent} from "./vehicle-details.component";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute, provideRoutes, Router, Routes} from "@angular/router";
import {Vehicle} from "../model/vehicle";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {VehicleService} from "../service/impl/vehicle.service";
import {Component} from "@angular/core";

class MockVehicleService {
  getById(id: number) {
    let vehicle = new Vehicle({name: 'Vehicle 1'});
    return Observable.of(vehicle);
  }
}

@Component({
  selector: 'root-cmp',
  template: '<router-outlet></router-outlet>'
})
class RootComponent {

}

function advance(fixture: ComponentFixture<any>): void {
  tick();
  fixture.detectChanges();
}

function createRoot(router: Router, componentType: any) {
  const f = TestBed.createComponent(componentType);
  advance(f);
  (<any>router).initialNavigation();
  advance(f);
  return f;
}

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  // let fixture: ComponentFixture<CharactersComponent>;

  const mockRoutes: Routes = [
    {path: '', component: RootComponent},
    {path: 'vehicles/:id', component: VehicleDetailsComponent}
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
        },
        {
          provide: VehicleService,
          useClass: MockVehicleService
        }
      ],
      declarations: [VehicleDetailsComponent, RootComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should get all vehicles', fakeAsync(
    inject([Router, VehicleService],
      (router: Router, mockVehicleService: MockVehicleService) => {
        let vehicles = [new Vehicle({name: 'Vehicle 1'}), new Vehicle({name: 'Vehicle 2'})];
        spyOn(mockVehicleService, 'getById').and.returnValue(Observable.of(vehicles));
        let fixture = createRoot(router, RootComponent);
        router.navigateByUrl('vehicles/1');
        advance(fixture);
        expect(mockVehicleService.getById).toHaveBeenCalledWith('1');
      }))
  );

  it('should test dumb method', fakeAsync(
    inject([Router, VehicleService],
      (router: Router, mockVehicleService: MockVehicleService) => {
        let vehicle = new Vehicle({name: 'Vehicle 1'});
        spyOn(mockVehicleService, 'getById').and.returnValue(Observable.of(vehicle));
        let fixture = createRoot(router, RootComponent);
        router.navigateByUrl('vehicles/1');
        advance(fixture);
        const vehicleComponent = fixture.debugElement.children[1].componentInstance;
        expect(vehicleComponent.something).toEqual('');
        vehicleComponent.justForTesting('Joe');
        expect(vehicleComponent.something).toEqual('Hello Joe');
      }))
  );

  it('should test rendering', fakeAsync(
    inject([Router, VehicleService],
      (router: Router, mockVehicleService: MockVehicleService) => {
        let vehicle = new Vehicle({name: 'Vehicle Name'});
        spyOn(mockVehicleService, 'getById').and.returnValue(Observable.of(vehicle));
        let fixture = createRoot(router, RootComponent);
        router.navigateByUrl('vehicles/1');
        advance(fixture);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('h3')[1].innerHTML).toContain('Vehicle Name')
      }))
  );
});
