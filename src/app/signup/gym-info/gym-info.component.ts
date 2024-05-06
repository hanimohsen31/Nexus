import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-gym-info',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './gym-info.component.html',
  styleUrl: './gym-info.component.scss',
})
export class GymInfoComponent {
  input: string = '';
  error: boolean = false;

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input = this.SignupService.userData.getValue().address;
  }

  checkInput() {
    if (!this.input) {
      this.error = true;
      return false;
    }
    return true;
  }

  continue() {
    if (this.checkInput()) {
      this.SignupService.updateUserData('gymInfo', this.input);
      this.SignupService.nextPage('signup/gym-plans');
    }
  }
}
