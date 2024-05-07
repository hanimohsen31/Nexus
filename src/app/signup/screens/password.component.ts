import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [InputsFormComponent],
  template: `
    <app-inputs-form
      header="Choose A Password..."
      claimer1="Be Sure to Pick a strong one"
      propKey="password"
      [inputs]="2"
      type1="password"
      placeholder1="Enter a password"
      type2="password"
      placeholder2="Confirm password"
      nextRoute="category"
    ></app-inputs-form>
  `,
})
export class PasswordComponent {}
