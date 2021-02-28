import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllrecordComponent } from './component/allrecord/allrecord.component';
import { EditblogComponent } from './component/editblog/editblog.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {

    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'allrecord',
        component: AllrecordComponent
      },
      {
        path: 'editblog',
        component: EditblogComponent
      },
      {
        path: 'editblog/:id',
        component: EditblogComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
