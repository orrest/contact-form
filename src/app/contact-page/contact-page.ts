import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastService } from '../components/toast/toast-service';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);

  form: FormGroup;

  requiredErr = 'This field is required';

  constructor() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(24)]],
      lastName: ['', [Validators.required, Validators.maxLength(24)]],
      emailAddr: ['', [Validators.required, Validators.email]],
      queryType: ['', [Validators.required]],
      message: ['', [Validators.required]],
      agreement: [undefined, [Validators.required]],
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
      console.log(form.value);

      this.toastService.nextMessage({
        title: 'Message Sent!',
        content: 'Thanks for completing the form. We’ll be in touch soon!',
        delayInMs: 3000,
      });
    } else {
      form.markAllAsTouched();
    }
  }
}
