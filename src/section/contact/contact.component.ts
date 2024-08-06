import { DataService } from './../../service/data.service';
import { Component } from '@angular/core';
import Person from '../../shared/personal.info';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'section[contact]',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
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

  constructor(public dataService: DataService) {}

  private sendEmail(link: string) {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.click();
  }

  public submitForm() {
    this.isSubmitted = true;

    if (this.contactForm.valid === false) return;

    const formData = this.contactForm.value;

    const link = `mailto:${this.dataService.personalData.email}?subject=${formData.subject}&body=${formData.message}`;

    this.sendEmail(link);
    this.contactForm.reset();
  }
}
