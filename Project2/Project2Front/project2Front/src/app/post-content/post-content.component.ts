import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  id: number;
  admin = false;
  user: User;
  post: Post;
  action = false;
  url = 'http://localhost:8085/post/getPost';
  verifyUrl = 'http://localhost:8085/account/verify';
  approveUrl = 'http://localhost:8085/post/approve';
  denyUrl = 'http://localhost:8085/post/deny';

  constructor(private postService: PostService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.getProfile();
    this.postService.postId.subscribe(newId => this.id = newId);
    this.getPost();
  }

  getPost() {
    this.http.post<Post>(this.url, this.id, {withCredentials: true})
      .subscribe((data) => {
        this.post = data;
        if (this.post.statusId.statusId === 1) {
          this.action = true;
        }
      }, ((error) => {
        console.log(error);
      }));
  }

  getProfile() {
    this.http.get<User>(this.verifyUrl, {withCredentials: true})
      .subscribe((data) => {
        this.user = data;
        console.log(this.user);
        if (this.user.title === 1) {
          this.admin = true;
          console.log(this.admin);
        }
      }, (err) => {
        console.error(err);
        this.router.navigate([('')]);
      });
  }

  approve() {
    this.http.post(this.approveUrl, this.id, {responseType: 'text', withCredentials: true})
      .subscribe(() => {
        console.log('approved');
        this.router.navigate([('pendingPost')]);
      }, (err) => {
        console.error(err);
      });
  }

  deny() {
    this.http.post(this.denyUrl, this.id, {responseType: 'text', withCredentials: true})
      .subscribe(() => {
        console.log('denied');
        this.router.navigate([('pendingPost')]);
      }, (err) => {
        console.error(err);
      });
  }
}
