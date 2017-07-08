"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Starship = (function () {
    function Starship(starship) {
        this.pilots = starship && starship.pilots || null;
        this.MGLT = starship && starship.MGLT || null;
        this.starship_class = starship && starship.starship_class || null;
        this.hyperdrive_rating = starship && starship.hyperdrive_rating || null;
        this.id = starship && starship.id || null;
        this.edited = starship && starship.edited || null;
        this.consumables = starship && starship.consumables || null;
        this.name = starship && starship.name || null;
        this.created = starship && starship.created || null;
        this.cargo_capacity = starship && starship.cargo_capacity || null;
        this.passengers = starship && starship.passengers || null;
        this.max_atmosphering_speed = starship && starship.max_atmosphering_speed || null;
        this.crew = starship && starship.crew || null;
        this.length = starship && starship.length || null;
        this.model = starship && starship.model || null;
        this.cost_in_credits = starship && starship.cost_in_credits || null;
        this.manufacturer = starship && starship.manufacturer || null;
        this.image = starship && starship.image || null;
        this.films = starship && starship.films || null;
    }
    return Starship;
}());
exports.Starship = Starship;
