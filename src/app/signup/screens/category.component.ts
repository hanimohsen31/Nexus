import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';
import { CategoryOptions } from '../../store/lookups';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    [showBar]="true"
    [showHeader]="true"
    [hasCaptcha]="false"
    [hasSkip]="false"
    [isLoginPage]="false"
    header="Tell Us about You ..."
    propKey="category"
    nextRoute=""
    imageUrl=""
    claimer1="Provide us with further insights into your preferences"
    claimer2=""
    [inputs]="0"
    placeholder1="Enter your age"
    placeholder2=""
    placeholder3=""
    type1=""
    type2=""
    type3=""
    [optionsList]="optionsList"
  ></app-inputs-form>
  <!-- nextRoute="" from component -->
  `,
})
export class CategoryComponent {
  optionsList = CategoryOptions;
}
