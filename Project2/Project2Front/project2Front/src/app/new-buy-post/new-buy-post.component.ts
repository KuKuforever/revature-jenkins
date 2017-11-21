import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-buy-post',
  templateUrl: './new-buy-post.component.html',
  styleUrls: ['./new-buy-post.component.css']
})
export class NewBuyPostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  post() {
    this.router.navigate([('buy')]);
  }
}
