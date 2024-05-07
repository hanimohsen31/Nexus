import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    header="What's Your Name?"
    claimer1="Let's Get to Know Each Other"
    propKey="name"
    type1="string"
    placeholder1="John Doe"
    nextRoute='email'
  ></app-inputs-form>`,
})
export class UsernameComponent {}
