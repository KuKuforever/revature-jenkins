import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {AppRouting} from './app-routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BuyStuffComponent } from './buy-stuff/buy-stuff.component';
import { SellStuffComponent } from './sell-stuff/sell-stuff.component';
import { ProfileComponent } from './profile/profile.component';
import { PostHistoryComponent } from './post-history/post-history.component';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { NewBuyPostComponent } from './new-buy-post/new-buy-post.component';
import { NewSellPostComponent } from './new-sell-post/new-sell-post.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { PostContentComponent } from './post-content/post-content.component';
import { PendingPostComponent } from './pending-post/pending-post.component';
import {PostService} from './post.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    BuyStuffComponent,
    SellStuffComponent,
    ProfileComponent,
    PostHistoryComponent,
    UpdateInfoComponent,
    NewBuyPostComponent,
    NewSellPostComponent,
    SuccessMessageComponent,
    PostContentComponent,
    PendingPostComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
