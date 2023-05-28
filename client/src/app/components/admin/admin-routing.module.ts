import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminAuthGuardService } from 'src/app/guard/admin/admin-auth-guard.service';
import { AdminUnAuthGuardService } from 'src/app/guard/admin/admin-un-auth-guard.service';

const routes: Routes = [

  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'login', component: AdminLogInComponent,canActivate: [AdminUnAuthGuardService] },
      { path: 'dashBoard', component: AdminDashBoardComponent,canActivate: [AdminAuthGuardService] },
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }