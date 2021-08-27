// custom validator
// this validator function used to validate if password match confirm password

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function MustMatch(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const controlValue = formGroup.get(controlName)?.value;
    const matchingControl = formGroup.get(matchingControlName);
    const matchingControlValue = formGroup.get(matchingControlName)?.value;
    if (matchingControl && matchingControlValue.trim() === 0) {
      (matchingControl as AbstractControl).setErrors({ required: true });
      return { required: true };
    } else {
      (matchingControl as AbstractControl).setErrors(null);
    }
    if (control && matchingControl && controlValue !== matchingControlValue) {
      matchingControl.setErrors({ mustMatch: true });
      return { mustMatch: true };
    } else {
      (matchingControl as AbstractControl).setErrors(null);
    }
    return null;
  };
}

// ex:
// this.form = this.formBuilder.group(
//   {
//     password: ['', [Validators.required]],
//     ConfirmPassword: ['', [Validators.required]],
//   },
//   {
//     validators: MustMatch('Password', 'ConfirmPassword'),
//   }
// );
