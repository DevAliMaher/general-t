// custom form control
// this form control will restrict user inputs to 14 character

import { FormControl } from '@angular/forms';

export class MyFormControl extends FormControl {
  setValue(
    value: string | null,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ): void {
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length > 14) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}

// ex:
// this.form = this.formBuilder.group({
//   myControl: new MyFormControl('', [Validators.required]),
// });
