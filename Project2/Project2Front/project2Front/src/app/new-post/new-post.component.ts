import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {Post} from '../models/post';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  imgUrl: string;
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
  private selectType: number = 1;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  post() {
    console.log(this.user.email);
    console.log("Type is: " + this.selectType);
    this.postObj.title = this.title;
    this.postObj.postEmail = this.user.email;
    this.postObj.title = this.title;
    this.postObj.city = this.city;
    this.postObj.state = this.state;
    this.postObj.zip = this.zip;
    this.postObj.description = this.description;
    this.postObj.typeId = this.selectType;
    this.postObj.country = 'United States';
    console.log(this.postObj);
    if (this.imgFile == null) {
      this.http.post(this.postUrl, this.postObj, {responseType: 'text', withCredentials: true})
        .subscribe(() => {
          console.log("Type is: " + this.selectType);
          if (this.selectType == 2) {
            this.router.navigate([('buy')]);
          } else {
            this.router.navigate([('sell')]);
          }
        }, () => {
          console.error('upload new post failed');
        });
    } else {
      /* UPLOAD IMAGE TO IMGUR*/
      this.uploadToImgur(link => {
        // now upload Post
        console.log('URL is: ' + link);
        this.postObj.imgUrl = link;
        this.http.post(this.postUrl, this.postObj, {responseType: 'text', withCredentials: true})
          .subscribe(() => {
            if (this.selectType == 2) {
              this.router.navigate([('buy')]);
            } else {
              this.router.navigate([('sell')]);
            }

          }, () => {
            console.error('upload new post failed');
          });
      });
    }
  }

  getProfile() {
    this.http.get<User>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.user = data;
      }, (err) => {
        this.router.navigate([('')]);
      });
  }

  uploadToImgur(callback) {
    console.log(this.imageData);
    this.http.post(this.imgurUrl, this.imgFile,
      {headers: new HttpHeaders().set('Authorization', 'Client-ID 797cf96bf083de6')})
      .subscribe((resp) => {
        console.log(resp);
        callback((resp as any).data.link);
      });
  }

  getFile(evt) {
    this.imgFile = evt.target.files[0];
  }

  getType(evt) {
    console.log("Type before: " + this.selectType);
    this.selectType = evt.target.value;
    console.log("Type after: " + this.selectType);
  }
}
