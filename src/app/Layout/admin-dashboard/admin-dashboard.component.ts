import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute
    ,private router:Router){ }

  ngOnInit(): void {
  }
  getCategories(){
     this.router.navigate(['CategoryIndex'],{relativeTo:this.activatedRoute})    
  }
  getproducts(){
    this.router.navigate(['productIndex'],{relativeTo:this.activatedRoute})    
  }
}
