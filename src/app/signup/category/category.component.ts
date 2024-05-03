import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryOptions = [
    'Trainee',
    'Trainer',
    'Others',
  ]
}
