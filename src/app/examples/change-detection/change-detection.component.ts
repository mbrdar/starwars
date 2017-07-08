import {Component, OnInit} from '@angular/core';
import {Profile} from "../profile.model";

@Component({
  selector: 'change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent {

  profile1: Profile = new Profile('Joe', 'Doe');
  profile2: Profile = new Profile('Jane', 'Roe');

  constructor() {

  }


}
