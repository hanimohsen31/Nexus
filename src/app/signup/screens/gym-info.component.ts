import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-gym-info',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="false"
    [isLoginPage]="false"
    header="Tell us about your GYM"
    propKey="gymInfo"
    nextRoute="gym-plans"
    imageUrl=""
    claimer1="Tell us your GYM Adress"
    claimer2=""
    [inputs]="1"
    placeholder1="34 model st. New York"
    placeholder2=""
    placeholder3=""
    type1="string"
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class GymInfoComponent {}
