import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  user: User;
  url = 'http://localhost:8085/account/verify';
  updateUrl = 'http://localhost:8085/account/update';
  nickname;
  phone;
  constructor(private router: Router,
              private http: HttpClient) {
    //this.getProfile();
  }

  ngOnInit() {
    this.getProfile();
  }

  submit() {
    this.user.username = this.nickname;
    this.user.phone = this.phone;
    this.http.post(this.updateUrl, this.user, {responseType: 'text', withCredentials: true} )
      .subscribe(() => {
        this.router.navigate([('profile')]);
      }, () => {
        console.error('update failed');
      });

  }

  cancel() {
    this.router.navigate([('profile')]);
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
