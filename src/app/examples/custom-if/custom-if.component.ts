import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-if',
  templateUrl: './custom-if.component.html',
  styleUrls: ['./custom-if.component.css']
})
export class CustomIfComponent implements OnInit {

  active = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.active = !this.active;
  }

}
