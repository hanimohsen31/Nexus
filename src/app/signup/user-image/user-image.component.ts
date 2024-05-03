import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-user-image',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.scss',
})
export class UserImageComponent {}
