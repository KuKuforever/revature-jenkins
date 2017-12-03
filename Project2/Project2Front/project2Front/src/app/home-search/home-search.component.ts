import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  posts: Post[];
  filterType  = 'All';
  filterTitle = null;
  url = 'http://localhost:8085/post/filteredPosts';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search() {
    let filter = {
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
}
