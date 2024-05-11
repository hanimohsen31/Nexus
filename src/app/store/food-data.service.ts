import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodDataService {
  constructor(private HttpClient: HttpClient) {}

  getFoodData(): Observable<any> {
    let url = `${environment.firebaseUrl}/data.json`;
    return this.HttpClient.get(url);
  }

  addNewFood(formData: any) {
    let url = `${environment.firebaseUrl}/data.json`;
    return this.HttpClient.post(url, formData);
  }
}
