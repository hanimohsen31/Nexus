import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-gym-plans',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="true"
    [isLoginPage]="false"
    header="Select A Plan"
    propKey="gymPlan"
    nextRoute="gym-plans"
    imageUrl=""
    claimer1="Select Your Preferred Plan"
    claimer2=""
    [inputs]="0"
    placeholder1="34 model st. New York"
    placeholder2=""
    placeholder3=""
    type1="string"
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class GymPlansComponent {}
