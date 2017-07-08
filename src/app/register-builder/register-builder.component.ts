import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "app/validation/CustomValidators";

@Component({
  selector: 'register-builder',
  templateUrl: './register-builder.component.html',
  styleUrls: ['./register-builder.component.css']
})
export class RegisterBuilderComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'confirmPassword': ['']
    });
    this.registerForm.controls.confirmPassword.validator = Validators.compose([Validators.required,
      CustomValidators.matchValue(this.registerForm.controls.password)]);
  }

  ngOnInit() {
  }

}
