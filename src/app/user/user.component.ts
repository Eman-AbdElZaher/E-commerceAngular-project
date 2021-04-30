import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public accountservice:AccountService) { }

  ngOnInit(): void {
    console.log('userid:'+this.accountservice.currentUserId);
    //console.log('userrole:'+this.accountservice.currentUserRole);
    console.log('username:'+this.accountservice.currentUserName);

  }

}
