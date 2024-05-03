import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './username.component.html',
  styleUrl: './username.component.scss',
})
export class UsernameComponent {}
