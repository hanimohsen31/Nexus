import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { FormsModule } from '@angular/forms';
import { SignupService } from './../signup.service';

@Component({
  selector: 'app-age',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './age.component.html',
  styleUrl: './age.component.scss',
})
export class AgeComponent {
  input: any = '';
  error: boolean = false;

  constructor(private SignupService: SignupService) { }

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input = this.SignupService.userData.getValue().age;
  }

  checkInput() {
    if (!this.input || +this.input < 4 || +this.input > 80) {
      this.error = true;
      return false;
    }
    else {
      return true;
    }
  }

  continue() {
    if (this.checkInput()) {
      this.SignupService.updateUserData('age', this.input);
      this.SignupService.nextPage('signup/gender');
    }
  }
}
