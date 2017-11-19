import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = fb.group({
      nickName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }

  register() {}

  login() {
    this.router.navigate([('')]);
  }

}
