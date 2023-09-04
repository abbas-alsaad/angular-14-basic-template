import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    this.buildBasicForm();
  }

  buildBasicForm() {
    this.signinForm = this.fb.group({
      email: ['test@example.com', Validators.required],
      password: ['1234', Validators.required],
    });
  }

  signin() {
    this.auth.signin(this.signinForm.value).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/image/add-image');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
