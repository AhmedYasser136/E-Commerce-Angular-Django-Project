import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserRegistered$() {
      throw new Error('Method not implemented.');
  }
  public isUserRegistered = false;

  constructor(private router: Router) { }

  setUserRegistered() {
    this.isUserRegistered = true;
  }

  registerUser(username: string, password: string) {
    // Register the user and set the flag to true
    this.setUserRegistered();
  }
}
