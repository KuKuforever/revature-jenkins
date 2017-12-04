import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {User} from "../models/user";
import {PostService} from "../post.service";


@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  posts: Post[];
  user: User;
  filterType = 'All';
  filterTitle = null;
  url = 'http://localhost:8085/post/filteredPosts'
  verifyUrl = 'http://localhost:8085/account/verify';
  post: Post = new Post();
  allPostUrl = 'http://localhost:8085/post/all';

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService,
              private userService: UserService) { }


  ngOnInit() {
    this.getProfile();
    this.getAllPost();
  }


  getAllPost() {
    this.http.get<Post[]>(this.allPostUrl, {withCredentials: true})
      .subscribe((data) => {
        this.posts = data;
        console.log(this.posts);

        this.posts.forEach((post) => {
          if (post.imageList.length > 0 ) {
            post.imgUrl = post.imageList[0].url;
          } else {
            post.imgUrl = '../../assets/img/nyanko06.png';
          }
        });
      }, (err) => {
        console.log(err);
        }
      );
  }

  search() {
    const filter = {
      filterType: this.filterType,
      filterTitle: this.filterTitle
    };
    this.http.post<Post[]>(this.url, filter, {responseType: 'json', withCredentials: true})
      .subscribe((data) => {
        console.error(this.filterType);
        this.posts = data;
        console.log(this.posts);
      }, (err) => {
        console.error(err);
      });
  }

  getValue(evt) {
    this.filterType = evt.target.value;
    console.log(this.filterType);
  }

  getProfile() {
    this.http.get<User>(this.verifyUrl, {withCredentials: true})
      .subscribe((data) => {
        this.user = data;
        this.userService.getLoggedIn();
        }, () => {
          this.router.navigate([('')]);
        }
      );
  }

  viewPost(postId) {
    console.log(postId);
    this.postService.changePostId(postId);
    this.router.navigate([('viewPost')]);
  }
}

