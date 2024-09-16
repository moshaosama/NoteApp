import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  private router = inject(Router);
  message = signal('');

  login(email: string, password: string) {
    this.httpClient
      .post('http://localhost:3000/login', {
        email: email,
        password: password,
      })
      .subscribe({
        next: (val) => window.localStorage.setItem('user', JSON.stringify(val)),
      });
  }
  signUp(
    fname: string,
    lname: string,
    phone: string,
    address: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ) {
    this.httpClient
      .post('http://localhost:3000/signUp', {
        fname: fname,
        lname: lname,
        phone: phone,
        address: address,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      })
      .subscribe({
        next: (val) => console.log('Mosha'),
        error: (err) => this.message.set(err.message),
      });
  }
}
