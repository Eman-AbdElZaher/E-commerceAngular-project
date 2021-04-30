import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AccountService } from '../Services/account.service';
import { ILogin } from '../SharedClasses/ilogin';
import { ResultViewModel } from '../SharedClasses/ResultViewModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoggedUser:ILogin;
  invalidLogin: boolean;   
  LoginForm=this.fb.group({
    userName :['',[Validators.required]],
    password:['',[Validators.required]]
  });

  get userName ()
  {
    return this.LoginForm.get('userName');
  }
  get password(){
    return this.LoginForm.get('password');
  }
  result:ResultViewModel;

  constructor(private fb:FormBuilder,private accountservice:AccountService,private router: Router) { }
 jwthelper= new JwtHelperService();
    
  ngOnInit(): void {
  }
  signIn() {  
    this.LoggedUser={
      username:this.userName.value,
      password:this.password.value
    }
    this.accountservice.login(this.LoggedUser)  
      .subscribe(response=>{
          console.log("res:"+response.token);
          localStorage.setItem('token',response.token );  
          this.router.navigate(['/Profile']);
        },(error)=>
        {
          console.log(error);
          this.invalidLogin = true; 
        });  
  }  
}
