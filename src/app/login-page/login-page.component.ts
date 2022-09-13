import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
  constructor(private router: Router,
    private activatedRoute:ActivatedRoute,private auth:AuthService) { 
    
  }

  ngOnInit(): void {
      if(this.auth.isUserLoggedIn()){
      this.router.navigate(['dashboard/home'])
    }
  }

  onsubmitted:boolean=false;

  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(10)]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)],)
  });
 
  
  onSubmit():void{
   this.onsubmitted = true;
   console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/dashboard']);
        },
        (err:Error) => {
          alert(err.message);
        }
        );
      
  }
    

  }
  

}
