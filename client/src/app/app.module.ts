import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AdminModule } from './components/admin/admin.module';


import {MatPaginatorModule} from '@angular/material/paginator';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AboutPageComponent } from './components/home/about-page/about-page.component';
import { NavBarComponent } from './shared/components/user/nav-bar/nav-bar.component';
import { TextEditorComponent } from './components/course/text-editor/text-editor.component';
import { DashBoardComponent } from './components/user/user-dash-board/dash-board/dash-board.component';
import { ChatBoxComponent } from './components/user/user-dash-board/chat-box/chat-box.component';
import { DashBordNavBarComponent } from './shared/components/user/dash-bord-nav-bar/dash-bord-nav-bar.component';
import { ChatUserComponent } from './components/user/user-dash-board/chat-user/chat-user.component';
import { PremiumComponent } from './components/course/premium/premium.component';
import { GetAllCoursesComponent } from './components/user/user-dash-board/get-all-courses/get-all-courses.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';
import { PymentOptionsComponent } from './components/pyment-options/pyment-options.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { NgxPayPalModule } from 'ngx-paypal';
import { StripeComponent } from './components/pyment-options/stripe/stripe.component';
import { PaymentSuccessFullComponent } from './components/pyment-options/payment-success-full/payment-success-full.component';
import { PaymentFaildComponent } from './components/pyment-options/payment-faild/payment-faild.component';
import { GetAllPurchesedCourseComponent } from './components/user/user-dash-board/get-all-purchesed-course/get-all-purchesed-course.component';
import { PaymentDetailsComponent } from './components/user/user-dash-board/payment-details/payment-details.component';
import { LatastCoursesComponent } from './components/user/user-dash-board/latast-courses/latast-courses.component';
import { FowllowersComponent } from './components/user/user-dash-board/fowllowers/fowllowers.component';
import { WalletComponent } from './components/user/user-dash-board/wallet/wallet.component';

const firebase = {
  apiKey: "AIzaSyBC4y6cT6FCm00SA6CfQeomtW_4YRPYdI4",
  authDomain: "auth-1dbcc.firebaseapp.com",
  projectId: "auth-1dbcc",
  storageBucket: "auth-1dbcc.appspot.com",
  messagingSenderId: "623488054012",
  appId: "1:623488054012:web:33c7ba239d5c84aaa09d79",
  measurementId: "G-G5SE36HY2F"
}



@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomePageComponent,
    AboutPageComponent,
    NavBarComponent,
    TextEditorComponent,
    DashBoardComponent,
    ChatBoxComponent,
    DashBordNavBarComponent,
    ChatUserComponent,
    PremiumComponent,
    GetAllCoursesComponent,
    CourseDetailsComponent,
    PymentOptionsComponent,
    StripeComponent,
    PaymentSuccessFullComponent,
    PaymentFaildComponent,
    GetAllPurchesedCourseComponent,
    PaymentDetailsComponent,
    LatastCoursesComponent,
    FowllowersComponent,
    WalletComponent,
    
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    AngularFireModule.initializeApp(firebase),
    AdminModule,
    MatPaginatorModule,
    GooglePayButtonModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
