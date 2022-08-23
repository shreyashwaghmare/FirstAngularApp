import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ClassesComponent } from './home/classes/classes.component';
import { StudentsComponent } from './home/students/students.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  
  { path: 'loginPage', component: LoginPageComponent},
   
  {path: 'dashboard/home',component: HomePageComponent },
    {path:'dashboard/class',component:ClassesComponent},
    {path:'dashboard/student',component:StudentsComponent},
   {path: '',redirectTo:'loginPage',pathMatch:'full'},
   { path: 'registrationPage', component: RegistrationPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
