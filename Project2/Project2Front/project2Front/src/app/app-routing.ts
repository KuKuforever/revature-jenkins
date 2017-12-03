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
import {NewPostComponent} from './new-post/new-post.component';
import {HomeSearchComponent} from './home-search/home-search.component';
import {UserAuthGuard} from './user-auth.guard';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeSearchComponent
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
    component: ProfileComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'postHistory',
    component: PostHistoryComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'buy',
    component: BuyStuffComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'sell',
    component: SellStuffComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'updateInfo',
    component: UpdateInfoComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'newBuyPost',
    component: NewBuyPostComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'newSellPost',
    component: NewSellPostComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'success',
    component: SuccessMessageComponent
  },
  {
    path: 'pendingPost',
    component: PendingPostComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'viewPost',
    component: PostContentComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'newPost',
    component: NewPostComponent,
    canActivate: [UserAuthGuard]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
