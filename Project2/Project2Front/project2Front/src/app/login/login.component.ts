import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  err = 'Invalid email or password, please try again.';
  form: FormGroup;
  url = 'http://localhost:8085/account/login';
  display = false;

  constructor(private http: HttpClient, private router: Router,
              private fb: FormBuilder) {
    this.form = fb.group({
      verifyEmail: [null, [Validators.required]],
      verifyPassword: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login() {
    let account = {'username': this.email, 'password': this.password};
    this.http.post(this.url, account, {withCredentials: false})
      .subscribe((data) => {
        this.router.navigate([('home')]);
      }, (errror) => {
        this.display = true;
        console.error('incorrect email or pw');
      });
  }

  register() {
    this.router.navigate([('register')]);
  }

}
