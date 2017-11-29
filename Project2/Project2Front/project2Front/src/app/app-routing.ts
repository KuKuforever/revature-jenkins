import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {PostHistoryComponent} from './post-history/post-history.component';
import {BuyStuffComponent} from './buy-stuff/buy-stuff.component';
import {SellStuffComponent} from './sell-stuff/sell-stuff.component';
import {UpdateInfoComponent} from './update-info/update-info.component';
import {NewBuyPostComponent} from './new-buy-post/new-buy-post.component';
import {NewSellPostComponent} from './new-sell-post/new-sell-post.component';
import {SuccessMessageComponent} from './success-message/success-message.component';
import {PendingPostComponent} from './pending-post/pending-post.component';
import {PostContentComponent} from './post-content/post-content.component';
import {NewPostComponent} from "./new-post/new-post.component";

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'postHistory',
    component: PostHistoryComponent
  },
  {
    path: 'buy',
    component: BuyStuffComponent
  },
  {
    path: 'sell',
    component: SellStuffComponent
  },
  {
    path: 'updateInfo',
    component: UpdateInfoComponent
  },
  {
    path: 'newBuyPost',
    component: NewBuyPostComponent
  },
  {
    path: 'newSellPost',
    component: NewSellPostComponent
  },
  {
    path: 'success',
    component: SuccessMessageComponent
  },
  {
    path: 'pendingPost',
    component: PendingPostComponent
  },
  {
    path: 'viewPost',
    component: PostContentComponent
  },
  {
    path: 'newPost',
    component: NewPostComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
