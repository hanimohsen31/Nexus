import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
})
export class PasswordComponent {
  input: string = '';
  confirmPassword = '';
  error: boolean = false;
  errorMsg = '';

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
  }

  checkInput() {
    let userData = this.SignupService.userData.getValue();
    if (!this.input) {
      this.error = true;
      this.errorMsg = 'Please enter a valid Password';
      return false;
    } else if (this.input.length < 6) {
      this.error = true;
      this.errorMsg = 'Password should be more than 6 chars';
      return false;
    } else if (this.input !== this.confirmPassword) {
      this.error = true;
      this.errorMsg = 'Password not match';
      return false;
    } else if (this.input == userData?.phone) {
      this.error = true;
      this.errorMsg = 'Password can not be your Phone number';
      return false;
    } else if (this.input == userData?.email) {
      this.error = true;
      this.errorMsg = 'Password can not be your Email';
      return false;
    } else if (this.input == userData?.name) {
      this.error = true;
      this.errorMsg = 'Password can not be your Name';
      return false;
    } else {
      return true;
    }
  }

  continue() {
    if (this.checkInput()) {
      this.SignupService.updateUserData('password', this.input);
      // navigate
      this.SignupService.nextPage('signup/category');
    }
  }
}
