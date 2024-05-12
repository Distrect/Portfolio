import { Component } from '@angular/core';
import Person from '../../shared/personal.info';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'personal',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  public me: Person = new Person();
  public window: Window = window;
  constructor(private datePipe: DatePipe) {}

  public transformDate() {
    return this.datePipe.transform(this.me.birthDate, 'dd/MM/YYYY');
  }
}
