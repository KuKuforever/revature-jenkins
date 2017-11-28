import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-imgur',
  templateUrl: './imgur.component.html',
  styleUrls: ['./imgur.component.css']
})
export class ImgurComponent implements OnInit {
  imgInput: File;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  post() {
    window.alert('In Post');
  }
  ctest() {
    console.log('test ');
  }

}
