import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Profile} from "../profile.model";

@Component({
  selector: 'on-push-change-detection',
  templateUrl: './on-push-change-detection.component.html',
  styleUrls: ['./on-push-change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChangeDetectionComponent {

  @Input() profile: Profile;

  constructor() {
  }
}
