import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sell-stuff',
  templateUrl: './sell-stuff.component.html',
  styleUrls: ['./sell-stuff.component.css']
})
export class SellStuffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newSellPost() {
    this.router.navigate([('newPost')]);
  }
}
