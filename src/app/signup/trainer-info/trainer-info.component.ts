import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-trainer-info',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './trainer-info.component.html',
  styleUrl: './trainer-info.component.scss',
})
export class TrainerInfoComponent {
  input: string = '';
  error: boolean = false;

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input = this.SignupService.userData.getValue().trainerInfo;
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
      this.SignupService.updateUserData('trainerInfo', this.input);
      this.SignupService.nextPage('signup/age');
    }
  }

  skip() {
    this.SignupService.updateUserData('trainerInfo', this.input);
    this.SignupService.nextPage('signup/age');
  }
}
