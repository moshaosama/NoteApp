import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  userAuth = inject(UserService);
  ngOnInit(): void {
    document.getElementById('Forms')?.style.setProperty('display', 'none');
    document.getElementById('btnLogin')?.style.setProperty('display', 'none');
    document.getElementById('addBtn')?.style.setProperty('display', 'none');
  }
  form = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),
  });
  onSubmit() {
    this.userAuth.signUp(
      this.form.controls.fname.value!,
      this.form.controls.lname.value!,
      this.form.controls.phone.value!,
      this.form.controls.address.value!,
      this.form.controls.email.value!,
      this.form.controls.password.value!,
      this.form.controls.passwordConfirmation.value!
    );
  }
}
