import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym-plans',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './gym-plans.component.html',
  styleUrl: './gym-plans.component.scss',
})
export class GymPlansComponent {
  input: any = '';

  constructor(private SignupService: SignupService, private Router: Router) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.input = this.SignupService.userData.getValue().gymPlan;
  }

  selecetPlan(plan: string) {
    this.input = plan;
  }

  continue() {
    this.SignupService.updateUserData('gymPlan', this.input);
    this.SignupService.nextPage('signup/gym-website');
  }
}
