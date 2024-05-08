import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="false"
    [isLoginPage]="false"
    header="What's Your Name?"
    propKey="name"
    nextRoute="email"
    imageUrl=""
    claimer1="Let's Get to Know Each Other"
    claimer2=""
    [inputs]="1"
    placeholder1="John Doe"
    placeholder2=""
    placeholder3=""
    type1="string"
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class UsernameComponent {}
