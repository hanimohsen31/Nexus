import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-height',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './height.component.html',
  styleUrl: './height.component.scss',
})
export class HeightComponent {
  input: any = '';
  error: boolean = false;

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input = this.SignupService.userData.getValue().height;
  }

  checkInput() {
    if (!this.input || +this.input < 60 || +this.input > 250) {
      this.error = true;
      return false;
    } else {
      return true;
    }
  }

  continue() {
    if (this.checkInput()) {
      this.SignupService.updateUserData('height', this.input);
      let category = this.SignupService.userData.getValue()?.category
      if (category == 'Trainer') {
        this.SignupService.updateUserData('activity', 'Extra Active');
        this.SignupService.nextPage('signup/image');
      } else {
        this.SignupService.nextPage('signup/activity');
      }
    }
  }
}
