import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registrationForm = new FormGroup({
  fname : new FormControl("",[Validators.required,Validators.minLength(10)]),
   lname : new FormControl('',[Validators.required,Validators.minLength(10)]),
   email : new FormControl('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
   phoneNo : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
   city : new FormControl(''),
   password : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
   confirm : new FormControl('',Validators.required),

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
    this.registrationForm.reset;
    alert("Registered Successfulyy.");
    console.log(this.registrationForm.value);
  }
  
  
}
