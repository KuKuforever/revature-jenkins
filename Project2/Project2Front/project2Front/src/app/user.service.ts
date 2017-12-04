import {Injectable, OnInit} from '@angular/core';
import {User} from './models/user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class UserService implements OnInit{
  user: User;
  logged = false;
  verifyUrl = 'http://localhost:8085/account/verify';

  constructor(private http: HttpClient, private router: Router) {
    this.getProfile();
  }

  ngOnInit() {
  }

  getProfile() {
    this.http.get<User>(this.verifyUrl, {withCredentials: true})
      .subscribe((data) => {
        this.user = data;
        this.logged = true;
      }, () => {
        this.logged = false;
        this.router.navigate([('')]);
      });
  }

  getLoggedIn() {
    console.error(this.logged);
    return this.logged;
  }
}
