import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {User} from "../models/user";

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  posts: Post[];
  user: User;
  filterType = 'All';
  filterTitle = null;
  url = 'http://localhost:8085/post/filteredPosts'
  verifyUrl = 'http://localhost:8085/account/verify';

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.getProfile();
  }

  search() {
    const filter = {
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

  getProfile() {
    this.http.get<User>(this.verifyUrl, {withCredentials: true})
      .subscribe((data) => {
        this.user = data;
        this.userService.getLoggedIn();
        }, () => {
          this.router.navigate([('')]);
        }
      );
  }
}

