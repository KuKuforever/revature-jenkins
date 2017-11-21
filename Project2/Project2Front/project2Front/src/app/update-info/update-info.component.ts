import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigate([('profile')]);
  }
}
