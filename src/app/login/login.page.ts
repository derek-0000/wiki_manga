import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  URL:string='http://192.168.137.212:3000/mangas/login'
  li:any;
  data=''
  loginForm: FormGroup

  constructor(private router:Router, private http:HttpClient, public form:FormBuilder) {
    this.loginForm = this.form.group({
      'email':new FormControl("", Validators.required),//validator es para no subir sin nada 
      'password':new FormControl("", Validators.required)
    }) 
    
   }//httpclient es para 
  logon(){

    this.http.post(this.URL,this.logon).subscribe(Response=>{
      this.li=Response;
      console.log(this.li)
      //dato = this.loginForm.value

  
      
    })
    
   console.log(this.loginForm.value)
    
  }

  ngOnInit() {}

}
