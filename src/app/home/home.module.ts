import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    ClassesComponent,
    StudentsComponent,
    HomePageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers:[],
})
export class HomeModule { }
