import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Services/API_Category';
import { CategoryServicesService } from 'src/app/Services/category-services.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() selectedCategoryID:number;
  category:ICategory;
  constructor(private service:CategoryServicesService) { }

  ngOnInit(): void {
    this.category= this.service.getDetails(this.selectedCategoryID);
  }
}

