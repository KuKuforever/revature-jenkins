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
export class PostHistoryComponent implements OnInit, AfterViewInit {
  posts: Post[];
  displayedColumns = ['Post ID', 'Title', 'Type', 'Status', 'Date Posted'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  url = 'http://localhost:8085/post/postHistory';

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.getPost();
    this.dataSource = new MatTableDataSource(this.posts)
    this.dataSource.sort = this.sort;
  }

  getPost() {
    this.http.get<Post[]>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.posts = data;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.sort = this.sort;
        console.log(this.posts);
      }, (err) => {
        console.error(err);
      });
  }

  viewPost(postId) {
    console.log(postId);
    this.postService.changePostId(postId);
    this.router.navigate([('viewPost')]);
  }

  manSort () {
    this.ngAfterViewInit();
  }
}
