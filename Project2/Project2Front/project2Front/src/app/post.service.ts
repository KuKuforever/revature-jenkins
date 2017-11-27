import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PostService {
  private idSource = new BehaviorSubject<number>(-1);
  postId = this.idSource.asObservable();

  constructor() { }

  changePostId(id: number) {
    this.idSource.next(id);
  }
}
