import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  loggedIn$ = new BehaviorSubject(false);

  constructor() {
  }

  login(username: string, password: string) {
    if (username === 'username' && password === 'password') {
      localStorage.setItem('username', username);
      this.loggedIn$.next(true);
    }
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    this.loggedIn$.next(this.getUser() !== null);
    return this.loggedIn$;
  }

  logout() {
    localStorage.removeItem('username');
    this.loggedIn$.next(false);
  }
}
