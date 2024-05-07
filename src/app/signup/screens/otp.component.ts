import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';
@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
      [showBar]="true"
      [showHeader]="true"
      [hasCaptcha]="true"
      [hasSkip]="false"
      [isLoginPage]="false"
      header="Verification Code"
      propKey="otp"
      nextRoute=""
      imageUrl=""
      claimer1="Please enter code we just send to"
      claimer2=""
      [inputs]="1"
      placeholder1="Enter verification code"
      placeholder2=""
      placeholder3=""
      type1="string"
      type2=""
      type3=""
      [optionsList]="[]"
    ></app-inputs-form>
    <!-- nextRoute="" from service -->`,
})
export class OtpComponent {}
