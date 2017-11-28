import {Component, Input, OnInit} from '@angular/core';
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
  imgInput: any;
  imgFile: any;
  imgur: any;
  fd: FormData;

  user: User;
  postObj: Post = new Post();
  title;
  city;
  state;
  zip;
  description;
  url = 'http://localhost:8085/account/verify';
  postUrl = 'http://localhost:8085/post/new';
  imgurUrl = 'https://api.imgur.com/3/image';
  private apiUrl: string;
  private apiKey: string;
  private settings;
  private xhttp: XMLHttpRequest;
  // imgFile: File;
  private headers: HttpHeaders;
  private imageData: FormData;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  post() {
    console.log('Image file: ');
    console.log(this.user.email);
    /* UPLOAD IMAGE TO IMGUR*/
     this.uploadToImgur();
    /* upload post */
    /*this.postObj.title = this.title;
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
      });*/
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
    console.log(this.imageData);
    this.http.post(this.imgurUrl, this.imgFile,
      {headers: new HttpHeaders().set('Authorization', 'Client-ID 797cf96bf083de6')})
      .subscribe((resp) => {
        console.log(resp);
        //console.log(resp.data.link);
      });
  }

  getFile(evt) {
    this.imgFile = evt.target.files[0];
  }
}
