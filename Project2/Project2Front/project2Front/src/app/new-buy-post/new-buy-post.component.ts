import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Component({
  selector: 'app-new-buy-post',
  templateUrl: './new-buy-post.component.html',
  styleUrls: ['./new-buy-post.component.css']
})
export class NewBuyPostComponent implements OnInit {
  user: User;
  postObj: Post;
  title;
  city;
  state;
  zip;
  description;
  url = 'http://localhost:8085/account/verify';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
    this.postObj.postEmail = this.user.email;
  }

  post() {
    this.postObj.title = this.title;
    this.postObj.city = this.city;
    this.postObj.state = this.state;
    this.postObj.zip = this.zip;
    this.description = this.description;
    this.router.navigate([('buy')]);
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
