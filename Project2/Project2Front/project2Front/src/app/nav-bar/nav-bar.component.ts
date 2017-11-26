import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {withIdentifier} from 'codelyzer/util/astQuery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  url = 'http://localhost:8085/account/logout';

  constructor(private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate([('home')]);
  }

  buy() {
    this.router.navigate([('buy')]);
  }

  sell() {
    this.router.navigate([('sell')]);
  }

  viewHistory() {
    this.router.navigate([('postHistory')]);
  }

  viewProfile() {
    this.router.navigate([('profile')]);
  }

  logout() {
    this.http.post(this.url, '',{responseType: 'text', withCredentials: true})
      .subscribe((data) => {
        console.log(data);
        this.router.navigate([('')]);
      }, (err) => {
        console.error(err);
      });
  }
}
