import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';
import { SignupService } from '../../store/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  standalone: true,
  imports: [InputsFormComponent],
  template: `
    <app-inputs-form
      [showBar]="false"
      [showHeader]="true"
      [hasCaptcha]="false"
      [hasSkip]="false"
      [isLoginPage]="false"
      header="All is done ..."
      propKey="finish"
      nextRoute=""
      imageUrl=""
      claimer1=""
      claimer2=""
      [inputs]="0"
      placeholder1=""
      placeholder2=""
      placeholder3=""
      type1=""
      type2=""
      type3=""
      [optionsList]="[]"
    ></app-inputs-form>
    <!-- nextRoute="" from .ts -->
  `,
})
export class FinishComponent {
  // error = false
  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit() {
    // this.redirect('home');
    this.signUpUser();
  }

  signUpUser() {
    this.signupService.signUpUser().subscribe({
      next: (res: any) => {
        this.updateLocalStatus(res?.token);
        this.redirect('/home');
      },
      error: (err: any) => this.redirect('/signup'),
    });
  }

  updateLocalStatus(token: any) {
    this.signupService.updateIsLoggedIn(true);
    this.signupService.setToken(token);
  }

  redirect(route: string) {
    setTimeout(() => {
      this.router.navigate([`/${route}`]);
    }, 1000);
  }
}
