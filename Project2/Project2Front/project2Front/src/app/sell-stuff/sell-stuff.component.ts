import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../post.service';

@Component({
  selector: 'app-sell-stuff',
  templateUrl: './sell-stuff.component.html',
  styleUrls: ['./sell-stuff.component.css']
})
export class SellStuffComponent implements OnInit {
  salePosts: Post[];
  url = 'http://localhost:8085/post/salePost';

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.getSalePost();
  }


  newSellPost() {
    this.router.navigate([('newPost')]);
  }

  getSalePost() {
    this.http.get<Post[]>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.salePosts = data;
        console.log(this.salePosts);
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
