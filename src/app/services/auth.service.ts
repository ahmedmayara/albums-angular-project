import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users : User[] = [ { "username" : "Admin", "password" : "123", "roles":['ADMIN'] },
                     { "username" : "Ahmed Mayara", "password" : "123", "roles":['USER'] } ];

  public LoggedUser!: string;
  public isLoggedIn: boolean = false;
  public roles!: string[];

  constructor( private router : Router ) { }

  logout() {
    this.isLoggedIn = false;
    this.LoggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('LoggedUser');
    localStorage.setItem('isLoggedIn', String (this.isLoggedIn));
  }

  signIn ( user : User ) : Boolean {
    let validUser : Boolean = false;
    this.users.forEach ( (u) => {
      if (user.username == u.username && user.password == u.password) {
        validUser = true;
        this.LoggedUser = u.username;
        this.isLoggedIn = true;
        this.roles = u.roles;
        localStorage.setItem('LoggedUser', this.LoggedUser);
        localStorage.setItem('isLoggedIn', String (this.isLoggedIn));
      }
    });
    return validUser;
  }

  isAdmin() : Boolean {
    if (!this.roles)
      return false;
    return ( this.roles.indexOf('ADMIN') > -1 );
  }

  isUser() : Boolean {
    if (!this.roles)
      return false;
    return ( this.roles.indexOf('USER') > -1 );
  }
}
