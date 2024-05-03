import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-height',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './height.component.html',
  styleUrl: './height.component.scss'
})
export class HeightComponent {

}
