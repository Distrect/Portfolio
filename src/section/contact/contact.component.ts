import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Person from '../../shared/personal.info';

interface IContactForm {
  name: string;
  email: string;
  subject: string;
}

@Component({
  selector: 'section[contact]',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('mailer') private mailButton:
    | ElementRef<HTMLAnchorElement>
    | undefined;
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

  public ngAfterViewInit() {
    console.log(this.mailButton);
  }

  private getFormField(fieldName: string): AbstractControl {
    if (!this.fields.includes(fieldName))
      throw new Error('Given field name is not in the form');

    const fieldControl = this.contactForm.get(fieldName);

    if (fieldControl === null) throw new Error('Field is null');

    return fieldControl;
  }

  public checkIfFieldHasError(fieldName: string | AbstractControl): boolean {
    if (fieldName instanceof AbstractControl) {
      console.log(fieldName.errors);
      return Object.keys(fieldName?.errors || {}).length > 0;
    }

    const fieldControl = this.getFormField(fieldName);

    console.log(
      'Fields',
      fieldControl,
      Object.keys(fieldControl?.errors || {}).length > 0
    );

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
      ? 'Subject cannot be empty'
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

  public checkIfFormHasError(): boolean {
    const controls = Object.entries(this.contactForm.controls);

    for (const [key, val] of controls) {
      if (this.checkIfFieldHasError(val)) {
        this.allowSubmit = false;
        return true;
      }
    }

    this.allowSubmit = true;
    return false;
  }

  private clickMailer(link: string) {
    if (this.mailButton === undefined)
      throw new Error('Mail Button is undefined');

    const el = this.mailButton.nativeElement;
    el.href = link;
    el.click();
  }

  private generateMailLink(data: any) {
    const link = `mailto:${this.me.email}?subject=${data.name}&body=${data.subject}`;

    return link;
  }

  public submitForm(e: Event): void {
    this.contactForm.markAllAsTouched();

    console.log('Form Error:', this.checkIfFormHasError());

    if (this.checkIfFormHasError()) {
      console.log('Error');
      return;
    }

    const link = this.generateMailLink(this.contactForm.getRawValue());

    this.clickMailer(link);
  }
}
