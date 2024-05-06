import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from '../action-button/action-button.component';
@Component({
  selector: 'app-gym-website',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './gym-website.component.html',
  styleUrl: './gym-website.component.scss',
})
export class GymWebsiteComponent {
  input: string = '';
  error: boolean = false;

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input = this.SignupService.userData.getValue().gymWebsite;
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
      this.SignupService.updateUserData('gymWebsite', this.input);
      this.SignupService.nextPage('signup/gym-social-media');
    }
  }

  skip() {
    this.SignupService.updateUserData('gymWebsite', this.input);
    this.SignupService.nextPage('signup/gym-social-media');
  }
}
