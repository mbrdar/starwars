import { Component } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  clickMeStream$ = new Subject();

  constructor() {
    this.clickMeStream$
      .subscribe(event => console.log(event))
  }

}
