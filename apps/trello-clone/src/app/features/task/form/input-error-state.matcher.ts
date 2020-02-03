import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

type StateMatcherForm = FormGroupDirective | NgForm | null;
type StateMatcherFormControl = FormControl | null;

export class InputErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: StateMatcherFormControl,
    form: StateMatcherForm
  ): boolean {
    return control.invalid && !form.pristine;
  }
}
