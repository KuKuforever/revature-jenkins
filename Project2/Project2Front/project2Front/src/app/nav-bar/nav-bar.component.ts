import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  admin = false;
  user: User;
  url = 'http://localhost:8085/account/logout';
  verifyUrl = 'http://localhost:8085/account/verify';

  constructor(private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  goHome() {
    this.router.navigate([('home')]);
  }

  buy() {
    this.router.navigate([('buy')]);
  }

  sell() {
    this.router.navigate([('sell')]);
  }

  viewHistory() {
    this.router.navigate([('postHistory')]);
  }

  viewProfile() {
    this.router.navigate([('profile')]);
  }

  logout() {
    this.http.post(this.url, '',{responseType: 'text', withCredentials: true})
      .subscribe((data) => {
        this.router.navigate([('')]);
      }, (err) => {
        console.error(err);
      });
  }

  viewPendingPost() {
    this.router.navigate([('pendingPost')]);
  }

  getProfile() {
    this.http.get<User>(this.verifyUrl, {withCredentials: true})
      .subscribe((data) => {
        this.user = data;
        if (this.user.title === 1) {
          this.admin = true;
        }
      }, (err) => {
        console.error(err);
        this.router.navigate([('')]);
      });
  }
}
