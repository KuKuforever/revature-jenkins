import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-pending-post',
  templateUrl: './pending-post.component.html',
  styleUrls: ['./pending-post.component.css']
})
export class PendingPostComponent implements OnInit {
  admin = false;
  user: User;
  posts: Post[];
  status = 'Pending';
  url = 'http://localhost:8085/post/getPendingPost';
  verifyUrl = 'http://localhost:8085/account/verify';

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.getProfile();
    this.getPendingPost();
  }

  getPendingPost() {
    this.http.post<Post[]>(this.url, this.status, {responseType: 'json', withCredentials: true})
      .subscribe((data) => {
        this.posts = data;
        console.log(this.posts);
      }, (err) => {
        console.error(err);
      });
  }

  viewPost(postId) {
    this.postService.changePostId(postId);
    this.router.navigate([('viewPost')]);
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
}
