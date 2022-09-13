import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isUserLoggedIn() :boolean {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['loginPage']);
  }

  login( email :any, password:any ): Observable<any> {
    if (email == 'admin@123.com' && password == 'admin123') {
      this.setToken('abcdefghijklmnopqrst');
      return of({ name: 'Shreyash Waghmare', email: 'admin@123.com' });
    }
    return throwError(new Error('Failed to login'));
  } 
     
     
     
   

  
  
}
