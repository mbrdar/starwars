import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";

export class CustomValidators {
  static matchValue(original: AbstractControl): ValidatorFn {
    return (c: FormControl) => {
      return original.value !== c.value ? {'mismatch': true} : null;
    };
  }

}
