import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../Custom_Validators/confirmPassword.validator';
import { ForbiddenNameValidator } from '../Custom_Validators/userName.validator';
import { AccountService } from '../Services/account.service';
import { ILogin } from '../SharedClasses/ilogin';
import { IUser} from '../SharedClasses/Iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newUser:IUser;
  errorMsg:any;
  registerForm=this.fb.group({
    UserName :['',[Validators.required,Validators.minLength(3),ForbiddenNameValidator(/admin/)]],
    Email:['',[Validators.required]],
    Image:[''],
    BirthDay:[''],
    Password:['',[Validators.required,Validators.minLength(8)]],
    ConfirmPassword:[''],
  },{validators:[ConfirmPasswordValidator]})

  get UserName ()
  {
    return this.registerForm.get('UserName');
  }
  get Email()
  {
    return this.registerForm.get('Email');
  }
  get Image()
  {
    return this.registerForm.get('Image');
  }
  get BirthDay()
  {
    return this.registerForm.get('BirthDay');
  }
  get Password(){
    return this.registerForm.get('Password');
  }
  get ConfirmPassword(){
    return this.registerForm.get('ConfirmPassword');
  }
  
  constructor(private fb:FormBuilder,private accountservice:AccountService) { 
   
  }
  ngOnInit(): void {
  
  }
  ngOnChanges(): void {
   
  }
  register()
  {
    this.newUser={
      userName:this.UserName.value,
      email:this.Email.value,
      image:this.Image.value,
      birthDay:this.BirthDay.value,
     password:this.Password.value,
     confirmPassword:this.ConfirmPassword.value
    }
    console.log(this.newUser);
    this.accountservice.AddNewUser(this.newUser).subscribe(
        (user)=>{
          this.newUser=user;
          console.log("res:"+this.newUser)
    },
    errorResponse=>
    {
     this.errorMsg=errorResponse;
    }
  )
  }
}