import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    header="Email Address"
    claimer1="We'll need your email to stay in touch"
    propKey="email"
    type1="email"
    placeholder1="johndoe@email.com"
    nextRoute="password"
  ></app-inputs-form>`,
})
export class EmailComponent {}
