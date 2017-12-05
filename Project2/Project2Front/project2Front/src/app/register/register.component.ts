import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   display = false;
   form: FormGroup;
   email;
   password;
   username;
   phone = null;
   url = 'http://localhost:8085/account/register';
   err = 'The email is already registered';
   isMatch: boolean = false;


  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.form = fb.group({
      verifyNickName: [null, Validators.required],
      verifyEmail: [null, Validators.required],
      verifyPassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      verifyPhone: [null],
      confirmPassword: [null, [Validators.required]]
    }, {validator: this.passwordConfirmation});
  }

  passwordConfirmation(c: AbstractControl): {invalid: boolean} {
    if (c.get('verifyPassword').value !== c.get('confirmPassword').value) {
      return {invalid: true};
    }
  }

  ngOnInit() {
  }

  register() {
     if (this.phone == null) {
       this.phone = 'not available';
     }

    const newUser = {'email': this.email, 'password': this.password, 'username': this.username, 'phone': this.phone};
     console.log(newUser);
    this.http.post(this.url, newUser, {responseType: 'text', withCredentials: false})
      .subscribe((data) => {
        this.router.navigate([('success')]);
        console.log(data);
      }, (error) => {
        console.error(error);
        this.display = true;
      });
  }

  login() {
    this.router.navigate([('')]);
  }

}
