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
  URL:string='http://192.168.137.212:3000/login'
  li:any;
  data=''
  loginForm: FormGroup

  constructor(private router:Router, private http:HttpClient, public form:FormBuilder) {
    this.loginForm = this.form.group({
      'username':new FormControl("", Validators.required),
      'pass':new FormControl("", Validators.required)
    }) 
    
   }
  async logon(){
   
    this.http.post(this.URL,this.loginForm.value).subscribe(Response=>{
      this.li= Response;
      console.log(this.li)
      if (this.li.login == true){
      this.router.navigate(['/main-page'])
      }else{
        console.log("Err")
      }
    })
  }

  ngOnInit() {}

}
