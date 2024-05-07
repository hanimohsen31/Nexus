import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="false"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="false"
    [isLoginPage]="true"
    header="Login"
    propKey="login"
    nextRoute=""
    imageUrl=""
    claimer1=""
    claimer2=""
    [inputs]="2"
    placeholder1="01xxxxxxxxx"
    placeholder2="Enter a password"
    placeholder3=""
    type1="number"
    type2="password"
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>
   <!-- nextRoute="" from component -->`,
})
export class LoginComponent {}
