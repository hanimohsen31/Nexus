import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { FormsModule } from '@angular/forms';
import { SignupService } from './../signup.service';
@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',
})
export class OtpComponent {
  input: string = '';
  phone: string = '';
  error: boolean = false;
  firebaseError = ''

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.phone = this.SignupService.userData.getValue().phone;
    this.input = this.SignupService.userData.getValue().otp;
    this.SignupService.otpErrorMsg$.subscribe({
      next: (res: any) => res ? (this.error = true, this.firebaseError = res) : null
    })
  }

  checkInput() {
    const optRegex = /\d{6}$/;
    if (!this.input) {
      this.error = true;
      return false;
    }
    if (!optRegex.test(this.input)) {
      this.error = true;
      return false;
    }
    return true;
  }

  continue() {
    if (this.checkInput()) {
      // this.SignupService.updateUserData('otp', this.input);
      this.SignupService.confirmationResult(this.input);
    }
  }

  reSendOtp(){
    this.SignupService.signInWithPhoneNumber(this.phone)
    // this.nextPage('signup/username'); in service
  }
}
