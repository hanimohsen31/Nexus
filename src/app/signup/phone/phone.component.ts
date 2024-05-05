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
  input: string = '';
  error: boolean = false;
  firebaseError = ""

  constructor(private SignupService: SignupService) { }

  ngOnInit() {
    this.input = this.SignupService.userData.getValue().phone;
    this.SignupService.mobileErrorMsg$.subscribe({
      next: (res: any) => res ? (this.error = true, this.firebaseError = res) : null
    })
  }

  checkInput() {
    let phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    phoneNumberRegex = /^01\d{9}$/; // egypt only
    if (!this.input) {
      this.error = true;
      return false;
    }
    if (!phoneNumberRegex.test(this.input)) {
      this.error = true;
      return false;
    }
    return true;
  }

  continue() {
    if (this.checkInput()) {
      this.SignupService.updateUserData('phone', this.input);
      this.SignupService.signInWithPhoneNumber(this.input)
    }
  }

}
