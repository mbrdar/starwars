import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {VehicleService} from "../service/impl/vehicle.service";
import {Vehicle} from "../model/vehicle";

@Component({
  selector: 'vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  vehicle: Vehicle;
  something: string = '';

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) {
    route.params.subscribe((params: Params) => {
      vehicleService.getById(params['id'])
        .subscribe((vehicle: Vehicle)=>{
          this.vehicle = vehicle;
        })
    })
  }

  justForTesting(name: string) {
     this.something = `Hello ${name}`;
  }
}
