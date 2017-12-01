import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {PostService} from '../post.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-post-history',
  templateUrl: './post-history.component.html',
  styleUrls: ['./post-history.component.css']
})
export class PostHistoryComponent implements OnInit {
  posts: Post[];
  url = 'http://localhost:8085/post/postHistory';

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.http.get<Post[]>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.posts = data;
      }, (err) => {
        console.error(err);
      });
  }

  viewPost(postId) {
    console.log(postId);
    this.postService.changePostId(postId);
    this.router.navigate([('viewPost')]);
  }



}
