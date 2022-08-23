import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { StudentsComponent } from './students/students.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 
const routes: Routes = [
    {   path: 'dashboard',   component: DashboardComponent , 
    children:[
    {   path: 'dashboard/home',   component: HomePageComponent},
    {   path: 'dashboard/student',   component:StudentsComponent },
    {   path: 'dashboard/class',   component: ClassesComponent  }]
    }];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }