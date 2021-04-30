import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authservice: AccountService,private router:Router) { }
  canActivate() {  
    if(this.authservice.isLoggedIn()) return true;  
    this.router.navigate(['/Login']);  
    return false;  
  }  
}
