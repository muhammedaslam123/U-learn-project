import { HomePageComponent } from './components/home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserAuthGuardeServiceService } from './guard/user/user-auth-guarde-service.service';
import { UserUnAuthGuardeServiceService } from './guard/user/user-un-auth-guarde-service.service';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
// import { TextEditorComponent } from './components/course/text-editor/text-editor.component';
import { DashBoardComponent } from './components/user/user-dash-board/dash-board/dash-board.component';
import { ChatBoxComponent } from './components/user/user-dash-board/chat-box/chat-box.component';
import { PremiumComponent } from './components/course/premium/premium.component';
import { GetAllCoursesComponent } from './components/user/user-dash-board/get-all-courses/get-all-courses.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent, canActivate: [UserUnAuthGuardeServiceService] },
  { path: 'signup', component: UserRegisterComponent, canActivate: [UserUnAuthGuardeServiceService] },
  { path: '', component: HomePageComponent },
  { path: 'addCourse', component: AddCourseComponent, canActivate: [UserAuthGuardeServiceService] },
  // { path: 'userDashboard', component: UserDashBoardComponent,canActivate:[UserAuthGuardeServiceService]},
  { path: 'dashBoard', component: DashBoardComponent, canActivate: [UserAuthGuardeServiceService] },
  { path: 'chatBox', component: ChatBoxComponent, canActivate: [UserAuthGuardeServiceService] },
  { path: 'premium', component: PremiumComponent, canActivate: [UserAuthGuardeServiceService] },
  { path: 'getAllCouress', component: GetAllCoursesComponent, canActivate: [UserAuthGuardeServiceService] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
