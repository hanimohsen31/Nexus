import { Component } from '@angular/core';
import { InputsFormComponent } from '../inputs-form/inputs-form.component';
import { CategoryOptions } from '../../store/lookups';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [InputsFormComponent],
  template: ` <app-inputs-form
    header="Tell Us about You ..."
    claimer1="Provide us with further insights into your preferences"
    propKey="category"
    [inputs]="0"
    [optionsList]="optionsList"
  ></app-inputs-form>`,
})
export class CategoryComponent {
  optionsList = CategoryOptions;
}
