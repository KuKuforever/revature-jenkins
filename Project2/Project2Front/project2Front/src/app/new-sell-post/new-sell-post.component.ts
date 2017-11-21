import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-sell-post',
  templateUrl: './new-sell-post.component.html',
  styleUrls: ['./new-sell-post.component.css']
})
export class NewSellPostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  post() {
    this.router.navigate([('sell')]);
  }
}
