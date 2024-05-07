import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-height',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="false"
    [isLoginPage]="false"
    header="How height are you?"
    propKey="height"
    nextRoute=""
    imageUrl=""
    claimer1="Provide your Height in Cm"
    claimer2=""
    [inputs]="1"
    placeholder1="Enter your height"
    placeholder2=""
    placeholder3=""
    type1="number"
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>
    <!-- nextRoute="" from component -->
  `,
})
export class HeightComponent {}
