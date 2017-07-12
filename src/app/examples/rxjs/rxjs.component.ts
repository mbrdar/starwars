import { Component } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/throttleTime';


@Component({
  selector: 'rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  clickMeStream$ = new Subject();

  constructor() {
    this.clickMeStream$
      .map((value) => {
        return 'test' + value;
      })
      .throttleTime(2000)
      .subscribe(event => console.log(event));
  }

}
