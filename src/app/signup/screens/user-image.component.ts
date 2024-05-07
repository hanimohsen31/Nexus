import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-user-image',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="true"
    [isLoginPage]="false"
    header="Upload your photo"
    propKey="image"
    nextRoute="finish"
    imageUrl=""
    claimer1="We'd love to see you. Upload a photo for your dating journey."
    claimer2=""
    [inputs]="0"
    placeholder1=""
    placeholder2=""
    placeholder3=""
    type1=""
    type2=""
    type3=""
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class UserImageComponent {}
