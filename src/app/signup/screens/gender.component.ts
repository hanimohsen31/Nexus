import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="false"
    [isLoginPage]="false"
    header="What's Your Gender?"
    propKey="gender"
    nextRoute="height"
    imageUrl=""
    claimer1="Tell us about your gender"
    claimer2=""
    [inputs]="0"
    placeholder1=""
    placeholder2=""
    placeholder3=""
    type1=""
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class GenderComponent {}
