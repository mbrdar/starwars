import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  register(registerForm: any) {
    console.log(registerForm);
  }

  ngOnInit() {
  }

}
