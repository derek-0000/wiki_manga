import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm: FormGroup;
  signUpSuccess = false; // for showing the success message the login page button
  urlApi = 'http://192.168.137.212:3000/register';

  constructor(public formSU: FormBuilder, 
              public http: HttpClient,
              public router: Router
    ) {
    this.signUpForm = this.formSU.group({
     'username': new FormControl("", Validators.required),
     'email': new FormControl("", Validators.required),
     'pass': new FormControl("", Validators.required),
     
    });
  }
  
  ngOnInit() {
  }
  
  register(){
    if (this.signUpForm.invalid) {
      console.log("Invalid");
    }
    else{
       
      this.http.post(this.urlApi, this.signUpForm.value).subscribe((res) => {
        console.log("Connected");
        this.signUpSuccess = true;
        this.signUpForm.reset(); // reset the form to clean it when the user is registered
      })
    }
  }

}
