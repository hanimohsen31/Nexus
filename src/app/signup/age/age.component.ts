import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-age',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './age.component.html',
  styleUrl: './age.component.scss',
})
export class AgeComponent {}
