import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  userAuth = inject(UserService);
  private router = inject(Router);

  ngOnInit(): void {
    document.getElementById('Forms')?.style.setProperty('display', 'none');
    document.getElementById('btnLogin')?.style.setProperty('display', 'none');
    document.getElementById('addBtn')?.style.setProperty('display', 'none');
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),
  });
  onSubmit() {
    this.userAuth.login(
      this.form.controls.email?.value!,
      this.form.controls.password?.value!
    );
  }
  onRouter() {
    this.router.navigate(['/']);
  }
}
