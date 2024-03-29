import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../../shared/Model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated = false;
  constructor() {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = localStorage.getItem('demo_login_status')
      ? true
      : false;
  }

  signin(credentials: User) {
    let isAuth: User;
    isAuth = { email: 'test@example.com', password: '1234' };
    if (
      isAuth.email == credentials.email &&
      isAuth.password == credentials.password
    ) {
      this.authenticated = true;
      localStorage.setItem('demo_login_status', 'true');
      return of({}).pipe(delay(1000));
    }
    return throwError(() => 'unexpected error occured');
  }
}
