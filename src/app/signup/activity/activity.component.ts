import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';
import { ActivityOptions } from '../../store/lookups';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  input: any = '';

  activityOptions = ActivityOptions;

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input =
      this.SignupService.userData.getValue().activity ||
      this.activityOptions[1];
  }

  selecetActivity(activity: string) {
    this.input = activity;
  }

  continue() {
    this.SignupService.updateUserData('activity', this.input);
    this.SignupService.nextPage('signup/image');
  }
}
