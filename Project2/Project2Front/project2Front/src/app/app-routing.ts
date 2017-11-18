import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {PostHistoryComponent} from './post-history/post-history.component';
import {BuyStuffComponent} from './buy-stuff/buy-stuff.component';
import {SellStuffComponent} from './sell-stuff/sell-stuff.component';

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
