import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onsubmitted:boolean=false;
  registrationForm = new FormGroup({
   fname : new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z]+$")]),
   lname : new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z]+$")]),
   email : new FormControl('',[Validators.required,Validators.email]),
   phoneNo : new FormControl('',[Validators.required,Validators.minLength(10),Validators.minLength(10),Validators.maxLength(10)]),
   city : new FormControl('',Validators.required),
   password : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(8)]),
   confirm : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(8)]),

  });

  get FirstName() : FormControl {
    return this.registrationForm.get("fname") as FormControl;
}

get LastName() : FormControl {
  return this.registrationForm.get("lname") as FormControl;}
  get Email() : FormControl {
    return this.registrationForm.get("email") as FormControl;}

    get PhoneNo() : FormControl {
      return this.registrationForm.get("phoneNo") as FormControl;}
      get City() : FormControl {
        return this.registrationForm.get("city") as FormControl;}

        get Password() : FormControl {
          return this.registrationForm.get("password") as FormControl;}

          get ConfirmPassword() : FormControl {
            return this.registrationForm.get("confirm") as FormControl;}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    
    this.onsubmitted=true;
    if(this.registrationForm.valid){
      
      this.router.navigateByUrl("/loginPage")
      console.log(this.registrationForm.value);
    }
   
  }
  
  
}
