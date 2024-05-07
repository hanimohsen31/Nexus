import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';
@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [hasCaptcha]="true"
    header="Verification Code"
    claimer1='Please enter code we just send to'
    claimer2=''
    propKey="otp"
    type1="string"
    placeholder1="Enter verification code"
  ></app-inputs-form>`,
})
export class OtpComponent {}
