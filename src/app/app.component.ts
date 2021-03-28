import { Component,OnInit } from '@angular/core';
import {FormControl,Validators,MinLengthValidator,FormBuilder,FormGroup} from "@angular/forms";
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularMaterialLogin';
  public loginForm: FormGroup;
  customerData: any;
  customer_name: any;
  userData: string;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,  
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  //method for error in login
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  // function call on submit login form
  public submitLoginForm(){
    if (this.loginForm.valid) {
      console.log("Form is submited")
    }
  };

  register() {
    console.log("Navigate to Registration Form");
  }
}
