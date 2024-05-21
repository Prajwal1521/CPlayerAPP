import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN_NAME } from './login/login.component';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }
  canActivate() {
    let x=localStorage.getItem("username");
      console.log(x);
    if (localStorage.getItem("username")) {
      console.log('in can activae');

      return true;
    }
    this.router.navigate(['/login']);
    console.log("navigating from favourite to login from auth-guard");

    return false;
  }
}
