import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  
  { path: 'loginPage', component: LoginPageComponent},

  {path: 'home',component: HomeComponent },
  
   {path: '',redirectTo:'loginPage',pathMatch:'full'},
   { path: 'registrationPage', component: RegistrationPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
