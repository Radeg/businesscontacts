import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {BusinessService} from './services/business.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [BusinessService]
})

export class AppComponent implements OnInit {
  title = 'app works!';
  businesses: Business[];
  categories: Category[];

  constructor(private _businessService: BusinessService) {

  }

  ngOnInit() {
    this._businessService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses
    })

    this._businessService.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }
}

export interface Business {
  $key?: string;
  company?: string;
  description?: string;
  category?: string;
  years_in_business?: string;
  street_address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  phone?: string;
  email?: string;
  created_at?: string;
}

export interface Category {
  $key?: string;
  name?: string;
}
