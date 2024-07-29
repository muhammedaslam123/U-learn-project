import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { TextEditorComponent } from './components/course/text-editor/text-editor.component';
import { AdminComponent } from './components/admin/admin.component';
import { routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
