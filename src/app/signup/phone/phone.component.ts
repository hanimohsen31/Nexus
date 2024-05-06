import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { FormsModule } from '@angular/forms';
import { SignupService } from './../signup.service';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss',
})
export class PhoneComponent {
  input: any = '';
  error: boolean = false;
  errorMsg = '';
  firebaseError = '';

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(false);
    this.SignupService.mobileErrorMsg$.subscribe({
      next: (res: any) =>
        res ? ((this.error = true), (this.firebaseError = res)) : null,
    });
  }

  checkInput() {
    let phoneNumberRegex = /^01\d{9}$/; // egypt only
    if (!this.input) {
      this.error = true;
      this.errorMsg = 'Please enter a valid number';
      return false;
    }
    let number: any = `0${this.input}`;
    if (!phoneNumberRegex.test(number)) {
      this.error = true;
      this.errorMsg = 'Not Valid Egyptian Number';
      return false;
    }
    return true;
  }

  continue() {
    let number: any = `0${this.input}`;
    if (this.checkInput()) {
      this.SignupService.updateUserData('phone', number);
      this.SignupService.signInWithPhoneNumber(number);
      // this.nextPage('signup/otp') in service
    }
  }

  goToLogin() {
    this.SignupService.nextPage('signup/login', 0);
  }
}
