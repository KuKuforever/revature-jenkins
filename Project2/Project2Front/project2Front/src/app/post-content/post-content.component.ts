import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  title = 'GoogleMap';
  lat: number;
  lng: number;
  zoom = 14;
  data: any;
  id: number;
  admin = false;
  owner = false;
  user: User;
  post: Post;
  pending = false;
  active = false;
  url = 'http://localhost:8085/post/getPost';
  verifyUrl = 'http://localhost:8085/account/verify';
  approveUrl = 'http://localhost:8085/post/approve';
  denyUrl = 'http://localhost:8085/post/deny';
  queryUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
  closeUrl = 'http://localhost:8085/post/close';
  imageUrl = '../../assets/img/nyanko06.png';

  constructor(private postService: PostService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.getProfile();
    this.postService.postId.subscribe(newId => this.id = newId);
    this.getPost();
  }

  getPost() {
    this.http.post<Post>(this.url, this.id, {withCredentials: true})
      .subscribe((data) => {
        this.post = data;
        if (this.post.imageList.length > 0 ) {
          this.post.imgUrl = this.post.imageList[0].url;
        } else {
          this.post.imgUrl = this.imageUrl;
        }
        this.getMap();
        if (this.post.statusId.statusId === 1) {
          this.pending = true;
        } else if (this.post.statusId.statusId === 2) {
          this.active = true;
        }

        if (this.post.postEmail === this.user.email) {
          this.owner = true;
        }

      }, ((error) => {
        console.log(error);
      }));
  }

  getProfile() {
    this.http.get<User>(this.verifyUrl, {withCredentials: true})
      .subscribe((data) => {
        this.user = data;
        if (this.user.title === 1) {
          this.admin = true;
        }
      }, (err) => {
        console.error(err);
        this.router.navigate([('')]);
      });
  }

  approve() {
    this.http.post(this.approveUrl, this.id, {responseType: 'text', withCredentials: true})
      .subscribe(() => {
        console.log('approved');
        this.router.navigate([('pendingPost')]);
      }, (err) => {
        console.error(err);
      });
  }

  deny() {
    this.http.post(this.denyUrl, this.id, {responseType: 'text', withCredentials: true})
      .subscribe(() => {
        console.log('denied');
        this.router.navigate([('pendingPost')]);
      }, (err) => {
        console.error(err);
      });
  }

  update() {

  }
  close() {
    this.http.post(this.closeUrl, this.id, {responseType: 'text', withCredentials: true})
      .subscribe(() => {
        console.log('closed');
        this.router.navigate([('postHistory')]);
      }, (err) => {
        console.error(err);
      });
  }

  getMap() {
    this.queryUrl = this.queryUrl + this.post.zip;
    this.http.get(this.queryUrl)
      .subscribe((data) => {
        this.data = (data as any).results[0].geometry.bounds;
        this.lat = (this.data.northeast.lat + this.data.southwest.lat) / 2;
        this.lng = (this.data.northeast.lng + this.data.southwest.lng) / 2;
      });
  }

  viewImg() {
    document.getElementById('imgModal').style.display = 'block';
    (document.getElementById('modalImg') as any).src = this.post.imgUrl;
    (document.getElementById('caption')).innerHTML = this.post.title;
  }

  closeModal() {
    document.getElementById('imgModal').style.display = 'none';
  }
}
