import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { calculateSumResult } from './equations';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  // added Food List
  userFoodList = new BehaviorSubject<any[]>([]);
  userFoodList$ = this.userFoodList.asObservable();

  // sum result object
  sumResult = new BehaviorSubject({});
  sumResult$ = this.sumResult.asObservable();

  constructor(private HttpClient: HttpClient) {}

  handleChange() {
    let userId = 'x012';
    let url = `${environment.baseUrl}/users/${userId}.json`;
    let currentFoodList = this.userFoodList.getValue();
    calculateSumResult(currentFoodList);
    this.HttpClient.put(url, {
      userFoodList: this.userFoodList.getValue(),
    }).subscribe();
  }

  // handle add
  handleAdd(element: any) {
    let currentFoodList = this.userFoodList.getValue();
    let isExisting = currentFoodList?.find(
      (elm: any) => elm?.FoodID == element?.FoodID
    );
    if (isExisting) {
      currentFoodList.push(element);
      this.userFoodList.next(currentFoodList);
      this.handleChange();
    }
  }

  // handle remove
  handleRemove(index: any) {
    let currentFoodList = this.userFoodList.getValue();
    currentFoodList.splice(index, 1);
    this.userFoodList.next(currentFoodList);
    this.userFoodList.getValue().length == 0
      ? this.handleClear()
      : this.handleChange();
  }

  // handle clear
  handleClear() {
    let userId = 'x012';
    let url = `${environment.baseUrl}/users/${userId}.json`;
    return this.HttpClient.delete(url);
  }
}
