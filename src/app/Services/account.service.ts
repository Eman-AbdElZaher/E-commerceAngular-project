import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ApiController } from '../Controller/ApiController';
import { IUser } from '../SharedClasses/Iuser';
import { ILogin } from '../SharedClasses/ilogin';
import { environment } from 'src/environments/environment';
import { ResultViewModel } from '../SharedClasses/ResultViewModel';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Accept': '*/*'
    })
  };
   jwthelper = new JwtHelperService();
  constructor(private _http:HttpClient) { }
AddNewUser(newuser:IUser):Observable<IUser>{
  
    return this._http.post<IUser>(`${ApiController.Account_URL}/register`,newuser)
    .pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }
    ));
}
authToken:any;

  
   login(credentials:ILogin):Observable<any>
   {
     const body={
      username: credentials.username,
      password: credentials.password,
      grant_type:'password'
    }
    return this._http.post(`${ApiController.Account_URL}/login`,body,this.httpOptions)
    .pipe(catchError((err)=>{return throwError(err.message ||"Internal Server error contact site adminstarator")}
   ),map((res) =>res));
   }

   loadToken(){
    const token = localStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
}

  isLoggedIn() {   
  let token= this.loadToken();
        if(!token)
          return false;

       let expirationDate = this.jwthelper.getTokenExpirationDate(token);
       let isExpired = this.jwthelper.isTokenExpired(token);
       return !isExpired;
  }
getCurrentUser(url:string){
  if(localStorage.getItem('token')){
    let token = localStorage.getItem('token');
  
    let jwtData = token.split('.')[1]
  
    let decodedJwtJsonData = window.atob(jwtData)
  
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    let userName=decodedJwtData[url];
    return userName;
  }
  return null;
}
get currentUserId()
{
   return this.getCurrentUser('http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier');
}
get currentUserName()
{
   return this.getCurrentUser('http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name');
}
get currentUserRole()
{
   return this.getCurrentUser("http://schemas.microsoft.com/ws/2008/06/identity/claims/role");
}
/*get currentUser() {  
  let token = localStorage.getItem('token');  
  if(!token) return null;  
  return new JwtHelperService().decodeToken(token);  
} */ 
}