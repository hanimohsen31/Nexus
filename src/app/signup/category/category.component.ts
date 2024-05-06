import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { SignupService } from '../signup.service';
import { CategoryOptions } from '../../store/lookups';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  input = '';
  categoryOptions = CategoryOptions;
  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input =
      this.SignupService.userData.getValue().category ||
      this.categoryOptions[0];
  }

  selecetActivity(gender: string) {
    this.input = gender;
  }

  continue() {
    this.SignupService.updateUserData('category', this.input);

    if (this.input == 'GYM') {
      this.SignupService.nextPage('signup/gym-info');
    } else if (this.input == 'Trainer') {
      this.SignupService.nextPage('signup/trainer-info');
    } else {
      this.SignupService.nextPage('signup/age');
    }
  }
}
