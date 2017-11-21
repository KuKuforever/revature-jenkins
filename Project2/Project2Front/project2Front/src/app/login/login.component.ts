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
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router,
              private fb: FormBuilder) {
    this.form = fb.group({
      vemail: [null, [Validators.required]],
      vpassword: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login() {
    let account = {'username': this.email, 'password': this.password};
    this.http.post('', account, {withCredentials: true});
    this.router.navigate([('home')]);
  }

  register() {
    this.router.navigate([('register')]);
  }

}
