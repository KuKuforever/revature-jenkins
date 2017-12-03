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
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSort,
  MatSortModule, MatStepperModule,
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { NewPostComponent } from './new-post/new-post.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserAuthGuard} from "./user-auth.guard";
import {UserService} from "./user.service";


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
    PendingPostComponent,
    NewPostComponent,
    HomeSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatGridListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMSGyrfPdWSOIqX7gWkY3Q35JM-ED-2ok'
    }),
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatTableModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  providers: [PostService, UserAuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
