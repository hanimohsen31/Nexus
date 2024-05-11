import { Component } from '@angular/core';
import { FoodTableComponent } from './food-table/food-table.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [FoodTableComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {

}
