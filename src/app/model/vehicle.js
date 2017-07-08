"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = (function () {
    function Vehicle(vehicle) {
        this.vehicle_class = vehicle && vehicle.vehicle_class || null;
        this.pilots = vehicle && vehicle.pilots || null;
        this.id = vehicle && vehicle.id || null;
        this.edited = vehicle && vehicle.edited || null;
        this.name = vehicle && vehicle.name || null;
        this.created = vehicle && vehicle.created || null;
        this.cargo_capacity = vehicle && vehicle.cargo_capacity || null;
        this.passengers = vehicle && vehicle.passengers || null;
        this.max_atmosphering_speed = vehicle && vehicle.max_atmosphering_speed || null;
        this.crew = vehicle && vehicle.crew || null;
        this.length = vehicle && vehicle.length || null;
        this.model = vehicle && vehicle.model || null;
        this.cost_in_credits = vehicle && vehicle.cost_in_credits || null;
        this.manufacturer = vehicle && vehicle.manufacturer || null;
        this.image = vehicle && vehicle.image || null;
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
