import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from "../models/post";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../post.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-buy-stuff',
  templateUrl: './buy-stuff.component.html',
  styleUrls: ['./buy-stuff.component.css']
})
export class BuyStuffComponent implements OnInit, AfterViewInit {
  wantPosts: Post[];
  url = 'http://localhost:8085/post/wantPost';

  displayedColumns1 = ['postId', 'title', 'typeId.type', 'statusId.status', 'postDate'];
  dataSource1 = new MatTableDataSource(this.wantPosts);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.getWantPost();
  }

  ngAfterViewInit() {
    this.dataSource1  = new MatTableDataSource(this.wantPosts);
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
    this.dataSource1  = new MatTableDataSource(this.wantPosts);
  }

  newBuyPost() {
    this.router.navigate([('newPost')]);
  }


  getWantPost() {
    this.http.get<Post[]>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.wantPosts = data;
        this.dataSource1  = new MatTableDataSource(this.wantPosts);

        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
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


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource1.filter = filterValue;
  }

}
