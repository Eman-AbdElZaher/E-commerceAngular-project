import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories=[
    {"id":1,"name":"Womens"},
    {"id":2,"name":"Mens"},
    {"id":3,"name":"Kids"}
  ]

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToCategoryDetails(cat)
  {
    this.router.navigate(["/Categories",cat.id]);
  }

}
