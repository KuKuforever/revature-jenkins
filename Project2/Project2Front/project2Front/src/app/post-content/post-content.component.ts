import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  id: number;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.postId.subscribe(newId => this.id = newId);
  }

}
