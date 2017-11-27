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
  postObj: Post = new Post();
  title;
  city;
  state;
  zip;
  description;
  url = 'http://localhost:8085/account/verify';
  postUrl = 'http://localhost:8085/post/new';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  post() {
    console.log(this.user.email);
    console.log(this.postObj);
    this.postObj.title = this.title;
    this.postObj.postEmail = this.user.email;
    this.postObj.title = this.title;
    this.postObj.city = this.city;
    this.postObj.state = this.state;
    this.postObj.zip = this.zip;
    this.postObj.description = this.description;
    this.postObj.typeId = 2;
    console.log(this.postObj);
    this.http.post(this.postUrl, this.postObj, {responseType: 'text', withCredentials: true})
      .subscribe(() => {
        this.router.navigate([('buy')]);
      }, () => {
        console.error('upload new post failed');
      });
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
