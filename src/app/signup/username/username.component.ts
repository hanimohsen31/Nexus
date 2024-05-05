import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { FormsModule } from '@angular/forms';
import { SignupService } from './../signup.service';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './username.component.html',
  styleUrl: './username.component.scss',
})
export class UsernameComponent {
  input: string = '';
  error: boolean = false;

  constructor(private SignupService: SignupService) { }

  ngOnInit() {
    this.input = this.SignupService.userData.getValue().name;
  }

  checkInput() {
    if (!this.input || this.input.length < 4) {
      this.error = true;
      return false;
    } else {
      return true;
    }
  }

  continue() {
    if (this.checkInput()) {
      this.SignupService.updateUserData('name', this.input);

      let category = this.SignupService.userData.getValue().category;
      if (category == 'GYM') {
        this.SignupService.nextPage('signup/email', 20);
      } else {
        this.SignupService.nextPage('signup/email', 10);
      }
    }
  }
}
