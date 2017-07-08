import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loggedInEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    authService.isLoggedIn()
      .subscribe((loggedIn) => {
        this.loggedIn = loggedIn;
        this.loggedInEvent.emit(loggedIn);
      });
  }

  login(loginForm) {
    this.authService.login(loginForm.username, loginForm.password);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/characters');
  }
}

//Example of login service without stream

/*export class LoginComponent {
  @Output() loggedInEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  loggedIn: boolean;

  constructor(private authService: AuthService) {
    this.loggedIn = authService.isLoggedIn();
    this.loggedInEvent.emit(this.loggedIn);
  }

  login(loginForm) {
    this.loggedIn = this.authService.login(loginForm.username, loginForm.password);
    this.loggedInEvent.emit(this.loggedIn);
  }

  logout() {
    this.loggedIn = this.authService.logout();
    this.loggedInEvent.emit(this.loggedIn);
  }
}*/
