import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {PostService} from '../post.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-post-history',
  templateUrl: './post-history.component.html',
  styleUrls: ['./post-history.component.css']
})
export class PostHistoryComponent implements OnInit, AfterViewInit {
  posts: Post[];
  url = 'http://localhost:8085/post/postHistory';

  displayedColumns1 = ['postId', 'title', 'typeId.type', 'statusId.status', 'postDate'];
  dataSource1 = new MatTableDataSource(this.posts);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  ngAfterViewInit() {
    this.dataSource1  = new MatTableDataSource(this.posts);
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
    this.dataSource1  = new MatTableDataSource(this.posts);
  }

  getPost() {
    this.http.get<Post[]>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.posts = data;
        this.dataSource1  = new MatTableDataSource(this.posts);

        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
      }, (err) => {
        console.error(err);
      });
  }

  viewPost(postId) {
    console.log(postId);
    this.postService.changePostId(postId);
    this.router.navigate([('viewPost')]);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource1.filter = filterValue;
  }

}
