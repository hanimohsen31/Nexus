import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';
@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
      [showBar]="false"
      [showHeader]="true"
      [hasCaptcha]="true"
      [hasSkip]="false"
      [isLoginPage]="false"
      header="Let's start with your number"
      propKey="phone"
      nextRoute=""
      imageUrl=""
      claimer1=""
      claimer2=""
      [inputs]="1"
      placeholder1="01xxxxxxxxx"
      placeholder2=""
      placeholder3=""
      type1="number"
      type2=""
      type3=""
      [optionsList]="[]"
    ></app-inputs-form>
    <!-- nextRoute="" from service -->`,
})
export class PhoneComponent {}
