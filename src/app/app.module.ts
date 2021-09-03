import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mainComponents/header/header.component';
import { NavBarButtonsComponent } from './miniComponents/nav-bar-buttons/nav-bar-buttons.component';
import { SearchbarComponent } from './tinyComponents/searchbar/searchbar.component';
import { SignInComponent } from './tinyComponents/sign-in/sign-in.component';
import { ProfileButtonComponent } from './tinyComponents/profile-button/profile-button.component';
import { HomeComponent } from './pages/home/home.component';
import { AdventureComponent } from './pages/adventure/adventure.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { BecomeASellerComponent } from './pages/become-aseller/become-aseller.component';
import { SliderComponent } from './mainComponents/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarButtonsComponent,
    SearchbarComponent,
    SignInComponent,
    ProfileButtonComponent,
    HomeComponent,
    AdventureComponent,
    ShopComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignUpComponent,
    SignInComponent,
    BecomeASellerComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
