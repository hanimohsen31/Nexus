import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';

@Component({
  selector: 'app-gym-social-media',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="true"
    [isLoginPage]="false"
    header="Social media ? ..."
    propKey="gymSocial"
    nextRoute="image"
    imageUrl=""
    claimer1="Add your GYM Social media"
    claimer2=""
    [inputs]="3"
    placeholder1="https://www.facebook.com/Gym"
    placeholder2="https://www.instagram.com/Gym"
    placeholder3="https://www.tiktok.com/Gym"
    type1="string"
    type2="string"
    type3="string"
    [optionsList]="[]"
  ></app-inputs-form>`,
})
export class GymSocialMediaComponent {}
