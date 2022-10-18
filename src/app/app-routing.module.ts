import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import {  ReviewComponent } from './review/review.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpandsupportComponent } from './helpandsupport/helpandsupport.component';
import { TamilnaduComponent } from './tamilnadu/tamilnadu.component';
import { ShimlaComponent } from './shimla/shimla.component';
import { GoaComponent } from './goa/goa.component';
import { LadakhComponent } from './ladakh/ladakh.component';
import { NewdelhiComponent } from './newdelhi/newdelhi.component';
import { KerlaComponent } from './kerla/kerla.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SearComponent } from './sear/sear.component';

const routes: Routes = [
 {path:'',component:IndexComponent},
 {path:'home',component:IndexComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'helpandsupport',component:HelpandsupportComponent},
  {path:'destination',component:DestinationComponent},
  {path:'payment',component:PaymentComponent},
  {path:'review',component:ReviewComponent},
  {path:'tamilnadu',component:TamilnaduComponent},
  {path:'shimla',component:ShimlaComponent},
  {path:'goa',component:GoaComponent},
  {path:'ladakh',component:LadakhComponent},
  {path:'newdelhi',component:NewdelhiComponent},
  {path:'kerala',component:KerlaComponent},
  {path:'profile',component:ProfileComponent},
  {path:'update-user/:id',component:SearchComponent},
  {path:'user-details/:id',component:UserprofileComponent},
  {path:'search',component:SearComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
