import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { SignupService } from '../signup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [CommonModule, ActionButtonComponent],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss',
})
export class GenderComponent {
  input: any = 'male';

  constructor(private SignupService: SignupService) { }

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input = this.SignupService.userData.getValue().gender || 'male';
  }

  selecetGender(gender: string) {
    if (gender == 'male') this.input = 'male'
    else if (gender == 'female') this.input = 'female'
    else this.input == 'male'
  }

  continue() {
    this.SignupService.updateUserData('gender', this.input);
    this.SignupService.nextPage('signup/height');
  }
}
