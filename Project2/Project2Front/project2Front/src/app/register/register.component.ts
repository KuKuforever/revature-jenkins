import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private form: FormGroup;
  private email;
  private password;
  private nickname;
  private phone = null;

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.form = fb.group({
      verifyNickName: [null, Validators.required],
      verifyEmail: [null, Validators.required],
      verifyPassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }

  register() {
    let newUser = {'email': this.email, 'password': this.password, 'nickname': this.nickname, 'phone': this.phone};
    this.http.post('', newUser, {withCredentials: false})
      .subscribe((data) => {
        this.router.navigate([('')]);
        console.log(data);
      }, (error) => {
        console.error(error);
      });
  }

  login() {
    this.router.navigate([('')]);
  }

}
