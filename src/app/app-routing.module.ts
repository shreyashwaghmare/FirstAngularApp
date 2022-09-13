import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ClassesComponent } from './home/classes/classes.component';
import { StudentsComponent } from './home/students/students.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  
  { path: 'loginPage', component: LoginPageComponent},
   {path: '',redirectTo:'loginPage',pathMatch:'full'},
   { path: 'registrationPage', component: RegistrationPageComponent},
   {   path: 'dashboard',canActivate: [AuthGuard],   component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
