import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Services/API_Category';
import { CategoryServicesService } from 'src/app/Services/category-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories:ICategory[]=[];

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
    ,private service:CategoryServicesService) { }

  ngOnInit(): void {
    // this.categories=this.service.getAll();
  }
  goToCategoryDetails(cat)
  {
    this.router.navigate(["/Categories",cat.id]);
  }

}
