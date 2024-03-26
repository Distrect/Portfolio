import { Component } from '@angular/core';
import Person from '../../shared/personal.info';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'personal',
  standalone: true,
  providers: [DatePipe],
  templateUrl: './personal.component.html',
  styleUrls: ['../../globalStyles.css', './personal.component.css'],
})
export class PersonalComponent {
  public me: Person = new Person();

  constructor(private datePipe: DatePipe) {}

  public transformDate() {
    return this.datePipe.transform(this.me.birthDate, 'dd/MM/YYYY');
  }
}
