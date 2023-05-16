import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserRegistered$() {
      throw new Error('Method not implemented.');
  }
  public isUserRegistered = false;

  constructor(private router: Router, private http: HttpClient) { }

  setUserRegistered() {
    this.isUserRegistered = true;
  }

  login(username: string, password: string) {
    return this.http.post('/api/login/', {username, password});
  }

  registerUser(username: string, password: string) {
    return this.http.post('/api/register/', {username, password});
    this.setUserRegistered();
  }
}
