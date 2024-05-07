import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-trainer-info',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="true"
    [isLoginPage]="false"
    header="Bio"
    propKey="trainerInfo"
    nextRoute="age"
    imageUrl=""
    claimer1="We'll need some information about you"
    claimer2=""
    [inputs]="1"
    placeholder1="Enter a breaf about yourself"
    placeholder2=""
    placeholder3=""
    type1="string"
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class TrainerInfoComponent {}
