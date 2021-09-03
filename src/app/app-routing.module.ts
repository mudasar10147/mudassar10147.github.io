import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdventureComponent } from './pages/adventure/adventure.component';
import { BecomeASellerComponent } from './pages/become-aseller/become-aseller.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './tinyComponents/sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'adventure', component: AdventureComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'becomeaseller', component: BecomeASellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
