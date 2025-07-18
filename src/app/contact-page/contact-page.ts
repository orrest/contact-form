import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  private fb = inject(FormBuilder);

  form: FormGroup;

  requiredErr = 'This field is required';

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

  getField(name: string) {
    return this.form.get(name);
  }

  isFieldInvalid(name: string) {
    const field = this.getField(name);
    if (field) {
      return field?.invalid && (field?.dirty || field?.touched);
    }

    return false;
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      // submit success
    } else {
      // 将所有表单控件标记为 touched，以显示所有错误
      form.markAllAsTouched();
    }
  }
}
