/**
 * Created by stegg on 15/10/2021
 */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RegistrationService} from "../_services/registration.service";
import {first} from "rxjs/operators";
import {AlertService} from "../_services/alert.service";
import {Alert, AlertType} from "../_models/alert";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  errormessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required, Validators.email],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  // Getters for easy access to form fields
  get username() {
    // @ts-ignore
    return this.registerForm.get('username') as FormControl;
  }

  get password() {
    // @ts-ignore
    return this.registerForm.get('password') as FormControl;
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();
    this.alertService.alert(new Alert({
      type: AlertType.Info,
      message: "Test",
      autoClose: true
    }));

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.registrationService.register(this.username.value, this.password.value, this.email.value)
      .pipe(first())
      .subscribe(
        success => {
          this.alertService.success('Registration successful', {keepAfterRouteChange: true})
          this.router.navigate(['/login'], {relativeTo: this.route.root});
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      )

  }
}
