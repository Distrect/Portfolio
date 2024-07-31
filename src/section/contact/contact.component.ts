import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/component/sectionheading/sectionheading.component';
import { DialIcon } from '../../shared/svgComponent';
import Person from '../../shared/personal.info';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section[contact]',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    DialIcon,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public me: Person = new Person();
  public isSubmitted: boolean = false;

  public contactForm: FormGroup = new FormGroup({
    subject: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    message: new FormControl('', { validators: [Validators.required] }),
  });

  constructor() {}

  private sendEmail(link: string) {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.click();
  }

  public submitForm() {
    this.isSubmitted = true;

    if (this.contactForm.valid === false) return;

    const formData = this.contactForm.value;

    const link = `mailto:${this.me.email}?subject=${formData.subject}&body=${formData.message}`;

    this.sendEmail(link);
  }
}
