import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
   
  constructor(private router: Router,
    private activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
  }
  onsubmitted:boolean=false;
  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(10)]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)],)
  });
 

  onSubmit(){
    console.log("log in button preseed");
    
    this.onsubmitted = true;

    
    if (this.loginForm.invalid) {
        return;
    }

    
    this.router.navigateByUrl('dashboard/dashboard/home');

  }
  get UserName() : FormControl{
    return this.loginForm.get("username") as FormControl;
  }
  get Password() : FormControl{
    return this.loginForm.get("password") as FormControl;
  }


}
