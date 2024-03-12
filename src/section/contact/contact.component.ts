import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Person from '../../shared/personal.info';

@Component({
  selector: 'section[contact]',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  public me: Person = new Person();
  public allowSubmit: boolean = true;

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    subject: new FormControl('', { validators: [Validators.required] }),
  });

  private fields: string[] = Object.keys(this.contactForm.controls);

  private getFormField(fieldName: string): AbstractControl {
    if (!this.fields.includes(fieldName))
      throw new Error('Given field name is not in the form');

    const fieldControl = this.contactForm.get(fieldName);

    if (fieldControl === null) throw new Error('Field is null');

    return fieldControl;
  }

  public checkIfFieldHasError(fieldName: string | AbstractControl): boolean {
    if (fieldName instanceof AbstractControl) {
      return Object.keys(fieldName?.errors || {}).length > 0;
    }

    const fieldControl = this.getFormField(fieldName);

    return Object.keys(fieldControl?.errors || {}).length > 0;
  }

  public getIfFieldTouched(fieldName: string): boolean {
    const fieldControl = this.contactForm.get(fieldName);

    if (!fieldControl)
      throw new Error('Specified field is not exist in the form');

    return fieldControl?.touched;
  }

  public getNameErrorMessage(): string {
    const nameError = this.contactForm.get('name')?.errors;
    const isRequiredError = nameError?.['required']
      ? 'Full name cannot be empty'
      : 'null';
    return isRequiredError;
  }

  public getEmailErrorMessage(): string {
    const emailControl = this.contactForm.get('email');
    const requiredMessage = emailControl?.hasError('required')
      ? 'Email Cannot be Empty'
      : '';
    const validEmailError = emailControl?.hasError('email')
      ? 'Given Email is Invalid'
      : '';
    return requiredMessage || validEmailError;
  }

  public getSubjectErrorMessage(): string {
    return this.contactForm.get('subject')?.hasError('required')
      ? 'Subect Cannnot be Empty'
      : '';
  }

  public checkIfFormHasError(): void {
    Object.entries(this.contactForm.controls).forEach(([key, val]) => {
      if (this.checkIfFieldHasError(val)) {
        this.allowSubmit = false;
      }
    });

    this.allowSubmit = true;
  }

  private generateMailLink(data: any) {
    const link = `mailto:${this.me.email}?subject=${data.name}&body=${data.subject}`;
    window.location.href = link;
  }

  public submitForm(e: Event): void {
    this.contactForm.markAllAsTouched();

    this.checkIfFormHasError();

    if (this.allowSubmit === false) return;

    const emailData = this.contactForm.getRawValue();
    this.generateMailLink(emailData);
    console.log('Raw Data:', emailData);
  }
}
