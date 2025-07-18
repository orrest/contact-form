import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  private fb = inject(FormBuilder);

  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(24)]],
      lastName: ['', [Validators.required, Validators.maxLength(24)]],
      emailAddr: ['', [Validators.required, Validators.email]],
      queryType: ['', [Validators.required]],
      message: ['', [Validators.required]],
      agreement: [false, [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      // submit success
    }
  }
}
