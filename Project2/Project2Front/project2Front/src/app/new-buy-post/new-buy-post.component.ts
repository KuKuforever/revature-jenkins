import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../models/post';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';

@Component({
  selector: 'app-new-buy-post',
  templateUrl: './new-buy-post.component.html',
  styleUrls: ['./new-buy-post.component.css']
})
export class NewBuyPostComponent implements OnInit {
  imgur: any;
  fd: FormData;

  user: User;
  postObj: Post = new Post();
  title;
  city;
  state;
  zip;
  description;
  imgInput: File;
  url = 'http://localhost:8085/account/verify';
  postUrl = 'http://localhost:8085/post/new';
  imgurUrl = 'https://api.imgur.com/3/image';
  private apiUrl: string;
  private apiKey: string;
  private settings;
  private xhttp: XMLHttpRequest;
  // imgFile: File;
  private headers: HttpHeaders;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  post() {
    console.log(this.imgInput);
    console.log(this.user.email);
    console.log(this.postObj);
    /* UPLOAD IMAGE TO IMGUR*/
    // this.uploadToImgur();
    /* upload post */
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

  uploadToImgur() {
    this.headers = new HttpHeaders();
    this.headers.set('Authorization', 'Client-ID {{797cf96bf083de6}}');
    console.log(this.headers);
    this.http.post(this.imgurUrl, this.imgInput)
      .subscribe((resp) => {
        console.log(resp);
      });
    /*this.imgFile = this.imgInput.files[0];
    this.imgur = require('imgur');
    this.imgur.setClientId('797cf96bf083de6');
    this.imgur.setAPIUrl('https://api.imgur.com/3/image');
    this.imgur.uploadFile(this.imgInput)
      .then(function (json) {
        console.log(json.data.link);
      })
      .catch(function (err) {
        console.error(err.message);
      });*/
    /*console.log('Now upload to imgur...');
    this.xhttp = new XMLHttpRequest();
    this.fd = new FormData();

    this.fd.append('image', this.imgInput);
    this.http.post(this.imgurUrl, this.imgInput)
      .subscribe((resp) => {
        console.log(resp);
      });*/
  }
}
