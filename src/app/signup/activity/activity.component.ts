import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  input: any = '';

  activityOptions = [
    'Sedentary',
    'Lightly Active',
    'Moderately Active',
    'Very Active',
    'Extra Active'
  ]

  constructor(private SignupService: SignupService) { }

  ngOnInit() {
    this.input = this.SignupService.userData.getValue().activity || this.activityOptions[1];
  }

  selecetActivity(activity: string) {
    this.input = activity
  }

  continue() {
    this.SignupService.updateUserData('activity', this.input);
    this.SignupService.nextPage('signup/image', 10);
  }

}
