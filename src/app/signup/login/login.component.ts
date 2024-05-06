import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  phone: string = '';
  password: string = '';
  error: boolean = false;
  errorMsg = '';

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(false);
  }

  checkPhone() {
    let phoneNumberRegex = /^01\d{9}$/; // egypt only
    if (!this.phone) {
      this.error = true;
      this.errorMsg = 'Please enter a valid number';
      return false;
    }
    let number: any = `0${this.phone}`;
    if (!phoneNumberRegex.test(number)) {
      this.error = true;
      this.errorMsg = 'Not Valid Egyptian Number';
      return false;
    }
    return true;
  }

  checkPassword() {
    if (!this.password) {
      this.error = true;
      this.errorMsg = 'Please enter a valid Password';
      return false;
    } else if (this.password.length < 6) {
      this.error = true;
      this.errorMsg = 'Password should be more than 6 chars';
      return false;
    } else {
      return true;
    }
  }

  login() {
    if (this.checkPhone() && this.checkPassword()) {
      this.SignupService.login(this.phone, this.password).subscribe({
        next: (res: any) => console.log(res),
        error: (err: any) => console.log(err),
      });
    }
  }

  goToSignup() {
    this.SignupService.nextPage('signup', 0);
  }
}
