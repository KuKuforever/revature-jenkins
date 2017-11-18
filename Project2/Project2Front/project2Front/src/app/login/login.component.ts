import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let account = {'username': this.username, 'password': this.password};
    this.http.post('', account, {withCredentials: true});
    this.router.navigate([('home')]);
  }

  register() {
    this.router.navigate([('register')]);
  }

}
