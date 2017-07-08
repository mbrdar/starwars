import {Component, Input} from "@angular/core";
import {Profile} from "../profile.model";

@Component({
  selector: 'default-change-detection',
  templateUrl: './default-change-detection.component.html',
  styleUrls: ['./default-change-detection.component.css']
})
export class DefaultChangeDetectionComponent {

  @Input('profile') profile: Profile;

  constructor() {
    // console.log(this.profile.lastName);
  }
}
