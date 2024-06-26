import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';
@Component({
  selector: 'app-email',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="false"
    [isLoginPage]="false"
    header="Email Address"
    propKey="email"
    nextRoute="password"
    imageUrl=""
    claimer1="We'll need your email to stay in touch"
    claimer2=""
    [inputs]="1"
    placeholder1="johndoe@email.com"
    placeholder2=""
    placeholder3=""
    type1="email"
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class EmailComponent {}
