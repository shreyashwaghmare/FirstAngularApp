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
   submitted = false;
  constructor(private router: Router,
    private activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
  }
  
  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.maxLength(10)]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)],)
  });
 

  onSubmit(){
    console.log("log in button preseed");
    
    this.submitted = true;

    
    if (this.loginForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
    this.router.navigateByUrl('/home');

  }
  get UserName() : FormControl{
    return this.loginForm.get("username") as FormControl;
  }
  get Password() : FormControl{
    return this.loginForm.get("password") as FormControl;
  }


}
