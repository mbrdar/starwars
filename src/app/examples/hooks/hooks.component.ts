import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  displayComponent = true;

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay(): void {
    this.displayComponent = !this.displayComponent;
  }
}
