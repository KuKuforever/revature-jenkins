import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buy-stuff',
  templateUrl: './buy-stuff.component.html',
  styleUrls: ['./buy-stuff.component.css']
})
export class BuyStuffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newPost() {
    this.router.navigate([('newPost')]);
  }
}
