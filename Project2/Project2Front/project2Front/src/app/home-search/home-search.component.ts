import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  posts: Post[];
  url = 'http://localhost:8085/post/all';

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }


  ngOnInit() {
    this.getAllPost();
  }


  getAllPost() {
    this.http.get<Post[]>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.posts = data;
        console.log(this.posts);
      }, (err) => {
        console.log(err);
        }
      );
  }

}
