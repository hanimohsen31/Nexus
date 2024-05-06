import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { FormsModule } from '@angular/forms';
import { SignupService } from './../signup.service';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss',
})
export class EmailComponent {
  input: string = '';
  error: boolean = false;

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input = this.SignupService.userData.getValue().email;
  }

  checkInput() {
    const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    if (!this.input) {
      this.error = true;
      return false;
    }
    if (!emailRegex.test(this.input)) {
      this.error = true;
      return false;
    }
    return true;
  }

  continue() {
    if (this.checkInput()) {
      this.SignupService.updateUserData('email', this.input);
      // navigate
      this.SignupService.nextPage('signup/password');
    }
  }
}
