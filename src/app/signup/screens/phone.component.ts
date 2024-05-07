import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [InputsFormComponent],
  template: `
    <app-inputs-form
      [showBar]="false"
      [hasCaptcha]="true"
      header="Let's start with your number"
      propKey="phone"
      type1="number"
      placeholder1="01xxxxxxxxx"
    ></app-inputs-form>
  `,
})
export class PhoneComponent {}
