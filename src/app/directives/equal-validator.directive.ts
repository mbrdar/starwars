import {Attribute, Directive, forwardRef, Input, ElementRef} from '@angular/core';
import {AbstractControl, ValidationErrors, Validator, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[equalValidator]',
  //extend build in validators
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }
  ]
})
export class EqualValidatorDirective implements Validator {

  @Input('equalValidator') original: string;
  constructor() {}

  validate(c: AbstractControl): ValidationErrors | any {
    return c.value !== this.original ? {mismatch: true} : null;
  }

}
