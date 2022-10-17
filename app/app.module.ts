import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PaymentComponent } from './payment/payment.component';
import { DestinationComponent } from './destination/destination.component';
import { ReviewComponent } from './review/review.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpandsupportComponent } from './helpandsupport/helpandsupport.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TamilnaduComponent } from './tamilnadu/tamilnadu.component';
import { KerlaComponent } from './kerla/kerla.component';
import { ShimlaComponent } from './shimla/shimla.component';
import { GoaComponent } from './goa/goa.component';
import { NewdelhiComponent } from './newdelhi/newdelhi.component';
import { LadakhComponent } from './ladakh/ladakh.component';
import{HttpClientModule}from'@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PopupComponent } from './popup/popup.component';
import { SearComponent } from './sear/sear.component';
// import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetpasswordComponent,
    PaymentComponent,
    DestinationComponent,
    ReviewComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    AboutusComponent,
    HelpandsupportComponent,
    TamilnaduComponent,
    KerlaComponent,
    ShimlaComponent,
    GoaComponent,
    NewdelhiComponent,
    LadakhComponent,
    SearchComponent,
    ProfileComponent,
    UserprofileComponent,
    PopupComponent,
    SearComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    SlickCarouselModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-registration', component: RegistrationComponent },
  { path: 'app-destination', component: RegistrationComponent },
  { path: '',   redirectTo: 'LoginComponent', pathMatch: 'full' },
  
];
