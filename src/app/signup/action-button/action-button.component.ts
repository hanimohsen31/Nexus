import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent {
  @Input() hasIcon: boolean = false;
  @Input() icon: string = '';
  @Input() label: string = '';
}
