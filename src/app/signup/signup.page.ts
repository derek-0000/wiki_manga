import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm: FormGroup;


  constructor(public formSU: FormBuilder, public http: HttpClient) { // <-- Added public http: HttpClient
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
      this.http.post('http://192.168.137.212:3000/register', this.signUpForm.value).subscribe((res) => {
        console.log("Connected");
        
      })
      console.log(this.signUpForm.value);
    }
  }
}
