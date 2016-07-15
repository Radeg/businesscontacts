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
  appState: string;
  activeKey: string;

  constructor(private _businessService: BusinessService) {

  }

  ngOnInit() {
    this.appState = 'default';
    this._businessService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses
    })

    this._businessService.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  changeState(state, key) {
    console.log('App state: ' + state);
    if(key) {
      console.log('Active key: ' + key);
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category) {
    this._businessService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses
    })
  }

  addBusiness(
    company: string,
    category: string,
    years_in_business: number,
    description: string,
    phone: string,
    email: string,
    street_address: string,
    city: string,
    state: string,
    zipcode: string
  ) {
    var created_at = new Date().toString();
    var newBusiness = {
      company: company,
      category: category,
      years_in_business: years_in_business,
      description: description,
      phone: phone,
      email: email,
      street_address: street_address,
      city: city,
      state: state,
      zipcode: zipcode,
      created_at: created_at
    }
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
