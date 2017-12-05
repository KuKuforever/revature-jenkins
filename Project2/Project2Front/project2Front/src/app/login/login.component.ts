import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../user.service";
import {User} from "../models/user";


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
  user: User;
  logged = false;
  verifyUrl = 'http://localhost:8085/account/verify';

  constructor(private http: HttpClient, private router: Router,
              private fb: FormBuilder) {
    this.form = fb.group({
      verifyEmail: [null, [Validators.required]],
      verifyPassword: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.getProfile();
  }

  login() {
    let account = {'email': this.email, 'password': this.password};
    this.http.post(this.url, account, {responseType: 'text', withCredentials: true})
      .subscribe((data) => {
        this.router.navigate([('home')]);
      }, (error) => {
        this.display = true;
        console.error('incorrect email or pw' + error);
      });
  }

  register() {
    this.router.navigate([('register')]);
  }

  getProfile() {
    this.http.get<User>(this.verifyUrl, {withCredentials: true})
      .subscribe((data) => {
          this.router.navigate([('home')]);
        }
      );
  }
}
