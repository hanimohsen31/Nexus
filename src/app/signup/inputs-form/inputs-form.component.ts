import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { CommonModule } from '@angular/common';
import { SignupService } from '../../store/signup.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inputs-form',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent, CommonModule],
  providers: [MessageService],
  templateUrl: './inputs-form.component.html',
  styleUrl: './inputs-form.component.scss',
})
export class InputsFormComponent {
  @Input() showBar: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() hasCaptcha: boolean = false;
  @Input() hasSkip: boolean = false;
  @Input() isLoginPage: boolean = false;
  @Input() header: string = '';
  @Input() propKey: string = '';
  @Input() nextRoute: string = '';
  @Input() imageUrl: string = '';
  @Input() claimer1: string = '';
  @Input() claimer2: string = '';
  // inputs
  @Input() inputs: number = 1;
  @Input() placeholder1: string = '';
  @Input() placeholder2: string = '';
  @Input() placeholder3: string = '';
  @Input() type1: string = '';
  @Input() type2: string = '';
  @Input() type3: string = '';
  @Input() optionsList: any[] = [];
  mainInput: string = '';
  secondaryInput: string = '';
  thirdInput: string = '';
  // errors
  error: boolean = false;
  errorMsg: string = '';
  firebaseError: string = '';
  // -------------------------- start functions --------------------------
  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit() {
    if (this.propKey == 'phone') this.getPhoneFirebaseError();
    if (this.propKey == 'otp') this.getOTPFirebaseError();
    this.checkBar();
    this.mainInput = this.signupService.userData.getValue()?.[this.propKey];
  }

  ngOnDestroy() {
    console.log('Destroyed');
    // console.log(this.signupService.userData.getValue())
  }
  // -------------------------- firebase errors --------------------------
  getPhoneFirebaseError() {
    this.signupService.mobileErrorMsg$.subscribe({
      next: (res: any) =>
        res ? ((this.error = true), (this.firebaseError = res)) : null,
    });
  }

  getOTPFirebaseError() {
    this.signupService.otpErrorMsg$.subscribe({
      next: (res: any) =>
        res ? ((this.error = true), (this.firebaseError = res)) : null,
    });
  }

  // -------------------------- checks -----------------------------------
  checkInput() {
    if (!this.mainInput) {
      this.error = true;
      this.errorMsg = `you haven't entered anything`;
      return false;
    }
    return true;
  }

  checkPhoneInput() {
    // egypt only
    let phoneNumberRegex = /^01\d{9}$/;
    if (!phoneNumberRegex.test(this.phoneModifiedInput())) {
      this.error = true;
      this.errorMsg = 'Not Valid Egyptian Number';
      return false;
    }
    return true;
  }

  checkEmail() {
    const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    if (!emailRegex.test(this.mainInput)) {
      this.error = true;
      return false;
    }
    return true;
  }

  checkOtpInput() {
    const optRegex = /\d{6}$/;
    if (!optRegex.test(this.mainInput)) {
      this.error = true;
      return false;
    }
    return true;
  }

  checkPassword() {
    let userData = this.signupService.userData.getValue();
    if (this.mainInput.length < 6) {
      this.error = true;
      this.errorMsg = 'Password should be more than 6 chars';
      return false;
    } else if (this.mainInput !== this.secondaryInput) {
      this.error = true;
      this.errorMsg = 'Password not match';
      return false;
    } else if (this.mainInput == userData?.phone) {
      this.error = true;
      this.errorMsg = 'Password can not be your Phone number';
      return false;
    } else if (this.mainInput == userData?.email) {
      this.error = true;
      this.errorMsg = 'Password can not be your Email';
      return false;
    } else if (this.mainInput == userData?.name) {
      this.error = true;
      this.errorMsg = 'Password can not be your Name';
      return false;
    } else {
      return true;
    }
  }

  checkAge() {
    if (+this.mainInput < 5) {
      this.error = true;
      this.errorMsg = `Age can't be < 5`;
      return false;
    } else if (+this.mainInput > 80) {
      this.error = true;
      this.errorMsg = `Age can't be > 80`;
      return false;
    } else {
      return true;
    }
  }

  checkHeight() {
    if (+this.mainInput < 100) {
      this.error = true;
      this.errorMsg = `Height can't be < 100`;
      return false;
    } else if (+this.mainInput > 300) {
      this.error = true;
      this.errorMsg = `Height can't be > 300`;
      return false;
    } else {
      return true;
    }
  }

  doChecks() {
    this.error = false;
    this.checkInput();
    if (this.propKey == 'phone') this.checkPhoneInput();
    if (this.propKey == 'email') this.checkEmail();
    if (this.propKey == 'otp') this.checkOtpInput();
    if (this.propKey == 'password') this.checkPassword();
    if (this.propKey == 'age') this.checkAge();
    if (this.propKey == 'height') this.checkHeight();
  }

  // -------------------------- actions -----------------------------------

  continue() {
    this.doChecks();
    if (!this.error) {
      // update user data
      if (this.propKey == 'phone') this.updateUserPhone();
      else if (this.isLoginPage == true) this.logIn();
      else this.updateUserData();
      // navigate
      if (
        this.propKey !== 'phone' &&
        this.propKey !== 'otp' &&
        this.propKey !== 'category' &&
        this.propKey !== 'height' &&
        !this.isLoginPage
      ) {
        this.navigateTo();
      }
      if (this.propKey == 'phone') {
        this.signupService.signInWithPhoneNumber(this.phoneModifiedInput());
      }
      if (this.propKey == 'otp') {
        this.signupService.confirmationResult(this.phoneModifiedInput());
      }
      if (this.propKey == 'category') {
        this.navigateInCategory();
      }
      if (this.propKey == 'height') {
        this.navigateInHeight();
      }
    }
  }

  goToLogin() {
    this.signupService.nextPage(`signup/login`, 0);
  }

  goToSignup() {
    this.signupService.nextPage(`signup/phone`, 0);
  }

  navigateTo() {
    this.signupService.nextPage(`signup/${this.nextRoute}`);
  }

  navigateInCategory() {
    let category = this.signupService.userData.getValue()?.category;
    if (category.toLowerCase() == 'Trainee'.toLowerCase()) {
      this.signupService.nextPage('signup/age');
    } else if (category.toLowerCase() == 'Trainer'.toLowerCase()) {
      this.signupService.nextPage('signup/trainer-info'.toLowerCase());
    } else if (category.toLowerCase() == 'GYM'.toLowerCase()) {
      this.signupService.nextPage('signup/gym-info');
    }
  }

  navigateInHeight() {
    let category = this.signupService.userData.getValue()?.category;
    if (category == 'Trainer') {
      this.signupService.updateUserData('activity', 'Extra Active');
      this.signupService.nextPage('signup/image');
    } else {
      this.signupService.nextPage('signup/activity');
    }
  }

  updateUserData() {
    this.signupService.updateUserData(this.propKey, this.mainInput);
  }

  updateLocalStatus(token: any) {
    this.signupService.updateIsLoggedIn(true);
    this.signupService.setToken(token);
  }

  logIn() {
    this.signupService.login(this.mainInput, this.secondaryInput).subscribe({
      next: (res: any) => {
        this.updateLocalStatus(res);
        this.router.navigate(['/home']);
      },
      error: (err: any) => console.log(err),
    });
  }
  // -------------------------- phone -----------------------------------

  phoneModifiedInput() {
    return `${this.mainInput}`;
  }

  reSendOtp() {
    this.signupService.signInWithPhoneNumber(this.phoneModifiedInput());
  }

  updateUserPhone() {
    this.signupService.updateUserData(this.propKey, this.phoneModifiedInput());
  }
  // -------------------------- other checkers  -----------------------------------
  checkBar() {
    this.signupService.updateShowBar(this.showBar);
  }

  selecetOption(option: string) {
    this.mainInput = option;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.mainInput = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
