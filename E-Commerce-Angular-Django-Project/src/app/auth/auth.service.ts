import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/';

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

  getData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }
 
  // login(username: string, password: string): Observable<any> {
  //   const url = `${this.baseUrl}/auth/login/`;
  //   return this.http.post(url, {username, password});
  // }

  // register(username: string, email: string, password: string): Observable<any> {
  //   const url = `${this.baseUrl}/auth/register/`;
  //   return this.http.post(url, {username, email, password});
  // }
}

