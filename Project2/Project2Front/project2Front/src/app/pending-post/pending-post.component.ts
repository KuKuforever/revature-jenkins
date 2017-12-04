import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-pending-post',
  templateUrl: './pending-post.component.html',
  styleUrls: ['./pending-post.component.css']
})
export class PendingPostComponent implements OnInit, AfterViewInit {
  admin = false;
  user: User;
  posts: Post[];
  status = 'Pending';
  url = 'http://localhost:8085/post/getPendingPost';
  verifyUrl = 'http://localhost:8085/account/verify';
  displayedColumns1 = ['postId', 'title', 'typeId.type', 'statusId.status', 'postDate'];
  dataSource1 = new MatTableDataSource(this.posts);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.getProfile();
    this.getPendingPost();
  }

  ngAfterViewInit() {
    this.dataSource1  = new MatTableDataSource(this.posts);
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
    this.dataSource1  = new MatTableDataSource(this.posts);
  }

  getPendingPost() {
    this.http.post<Post[]>(this.url, this.status, {responseType: 'json', withCredentials: true})
      .subscribe((data) => {
        this.posts = data;
        console.log(this.posts);
        this.dataSource1  = new MatTableDataSource(this.posts);

        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource1.filter = filterValue;
  }

}
