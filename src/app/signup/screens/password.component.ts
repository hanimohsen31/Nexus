import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';
@Component({
  selector: 'app-password',
  standalone: true,
  imports: [InputsFormComponent],
  template: `
    <app-inputs-form
      [showBar]="true"
      [showHeader]="true"
      [hasCaptcha]="false"
      [hasSkip]="false"
      [isLoginPage]="false"
      header="Choose A Password..."
      propKey="password"
      nextRoute="category"
      imageUrl=""
      claimer1="Be Sure to Pick a strong one"
      claimer2=""
      [inputs]="2"
      placeholder1="Enter a password"
      placeholder2="Confirm password"
      placeholder3=""
      type1="password"
      type2="password"
      type3=""
      [optionsList]="[]"
    ></app-inputs-form>
  `,
})
export class PasswordComponent {}
