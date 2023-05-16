// import { Injectable } from '@angular/core';
// import { CanLoadChild, Route, UrlSegment, UrlTree, Router } from '@angular/router';
// import { AuthService } from './auth.service';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanLoadChild {
//     constructor(private authService: AuthService, private router: Router) {}
  
//     canLoadChild(childRoute: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if (!this.authService.isUserRegistered) {
//         this.router.navigate(['/register']);
//         return false;
//       }
//       return true;
//     }
//   }
// import { Injectable } from '@angular/core';
// import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
// import { AuthService } from './auth.service';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanLoad {
//   constructor(private authService: AuthService, private router: Router) {}

//   canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//           if (!this.authService.isUserRegistered) {
//             this.router.navigate(['/register']);
//             return false;
//           }
//           return true;
//         }
//       }