import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class BusinessService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private _af: AngularFire) {
  }

  getBusinesses(category: string = null) {
    if(category != null) {
      this.businesses = this._af.database.list('/businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as FirebaseListObservable<Business[]>;
    } else {
      this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Business[]>;
    }
    return this.businesses;
  }

  getCategories() {
    this.categories = this._af.database.list('/categories') as FirebaseListObservable<Category[]>;
    return this.categories;
  }

  addBusiness(newBusiness): Promise<any> {
    return this.businesses.push(newBusiness);
  }

  addCategory(newCategory): Promise<any> {
    return this.categories.push(newCategory);
  }

  updateBusiness(key, updBusiness) {
    return this.businesses.update(key, updBusiness);
  }

  deleteBusiness(key) {
    return this.businesses.remove(key);
  }

}

export interface Business {
  $key?: string;
  company?: string;
  description?: string;
  category?: string;
  years_in_business?: number;
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