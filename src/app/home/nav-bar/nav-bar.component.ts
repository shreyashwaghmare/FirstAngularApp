import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
 
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
    
  ngOnInit(): void {
  }  

  logout():void{
   this.auth.logout(); 
  this.router.navigate(['loginPage']);

}
}