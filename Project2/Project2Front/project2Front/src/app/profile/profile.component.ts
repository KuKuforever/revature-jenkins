import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../users/user';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  url = 'http://localhost:8085/account/verify';

  constructor(private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  update() {
    this.router.navigate([('updateInfo')]);
  }

  getProfile() {
    this.http.get<User>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.user = data;
      }, (err) => {
        this.router.navigate([('')]);
      });
  }
}
