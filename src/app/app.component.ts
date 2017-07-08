import { Component } from '@angular/core';
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean;

  constructor(private authService: AuthService) {
    this.loggedIn = authService.isLoggedIn().getValue();
  }

  onLoggedInEvent(event) {
    this.loggedIn = event;
  }
}
