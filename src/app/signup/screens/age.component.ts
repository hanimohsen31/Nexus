import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-age',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="false"
    [isLoginPage]="false"
    header="How old are you?"
    propKey="age"
    nextRoute="gender"
    imageUrl=""
    claimer1="Please provide your age in years"
    claimer2=""
    [inputs]="1"
    placeholder1="Enter your age"
    placeholder2=""
    placeholder3=""
    type1="number"
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class AgeComponent {}
