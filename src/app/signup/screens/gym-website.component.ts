import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-gym-website',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="true"
    [isLoginPage]="false"
    header="Do you have a website?..."
    propKey="gymWebsite"
    nextRoute="gym-social-media"
    imageUrl=""
    claimer1="Add your GYM Website"
    claimer2=""
    [inputs]="1"
    placeholder1="https://www.gym.com"
    placeholder2=""
    placeholder3=""
    type1="string"
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class GymWebsiteComponent {}
