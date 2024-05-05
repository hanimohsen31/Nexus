import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  input = ''
  categoryOptions = [
    'Trainee',
    'Trainer',
    'GYM',
    'Others',
  ]
  constructor(private SignupService: SignupService) { }

  ngOnInit() {
    this.input = this.SignupService.userData.getValue().category || this.categoryOptions[0]
  }

  selecetActivity(gender: string) {
    this.input = gender
  }

  continue() {
    this.SignupService.updateUserData('category', this.input);

    if(this.input == 'GYM'){
      this.SignupService.nextPage('signup/username' , 20);
    }else {
      this.SignupService.nextPage('signup/username',10);
    }
  }

}
