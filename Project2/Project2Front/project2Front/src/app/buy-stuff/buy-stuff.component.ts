import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Post} from "../models/post";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../post.service";

@Component({
  selector: 'app-buy-stuff',
  templateUrl: './buy-stuff.component.html',
  styleUrls: ['./buy-stuff.component.css']
})
export class BuyStuffComponent implements OnInit {
  wantPosts: Post[];
  url = 'http://localhost:8085/post/wantPost';

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.getWantPost();
  }

  newBuyPost() {
    this.router.navigate([('newPost')]);
  }


  getWantPost() {
    this.http.get<Post[]>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.wantPosts = data;
        console.log(this.wantPosts);
      }, (err) => {
        console.log(err);
      });
  }
  viewPost(postId) {
    console.log(postId);
    this.postService.changePostId(postId);
    this.router.navigate([('viewPost')]);
  }

}
