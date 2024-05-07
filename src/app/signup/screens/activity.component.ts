import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';
import { ActivityOptions } from '../../store/lookups';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="false"
    [isLoginPage]="false"
    header="Activity"
    propKey="activity"
    nextRoute="image"
    imageUrl=""
    claimer1="Provide us with further insights into your preferences"
    claimer2=""
    [inputs]="0"
    placeholder1=""
    placeholder2=""
    placeholder3=""
    type1=""
    type2=""
    type3=""
    [optionsList]="optionsList"
  ></app-inputs-form>`,
})
export class ActivityComponent {
  optionsList = ActivityOptions;
}
