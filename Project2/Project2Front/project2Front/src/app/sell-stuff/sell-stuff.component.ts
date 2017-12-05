import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../post.service';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-sell-stuff',
  templateUrl: './sell-stuff.component.html',
  styleUrls: ['./sell-stuff.component.css']
})
export class SellStuffComponent implements OnInit, AfterViewInit {
  salePosts: Post[];
  url = 'http://localhost:8085/post/salePost';


  displayedColumns1 = ['postId', 'title', 'typeId.type', 'statusId.status', 'postDate'];
  dataSource1 = new MatTableDataSource(this.salePosts);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.getSalePost();
  }

  ngAfterViewInit() {
    this.dataSource1  = new MatTableDataSource(this.salePosts);
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
    this.dataSource1  = new MatTableDataSource(this.salePosts);
  }

  newSellPost() {
    this.router.navigate([('newPost')]);
  }

  getSalePost() {
    this.http.get<Post[]>(this.url, {withCredentials: true})
      .subscribe((data) => {
        this.salePosts = data;

        this.dataSource1  = new MatTableDataSource(this.salePosts);

        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource1.filter = filterValue;
  }

}
