import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  StoreName:string;

  constructor(public accountservice:AccountService,private router: Router) {
    this.StoreName="Fashi";
   }

  ngOnInit(): void {
  }
  logout() { 
    localStorage.setItem('token',"");   
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }  
}
