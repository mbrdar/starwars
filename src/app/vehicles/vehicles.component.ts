import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../model/vehicle";
import {VehicleService} from "../service/impl/vehicle.service";

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  vehicles = Array<Vehicle>();

  constructor(private vehicleService: VehicleService) {
    vehicleService.getAll()
      .subscribe((vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
      })
  }
}
