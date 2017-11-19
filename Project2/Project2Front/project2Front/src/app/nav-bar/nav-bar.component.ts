import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

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
    this.router.navigate([('')]);
  }
}
