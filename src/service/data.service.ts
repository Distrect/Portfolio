import { Injectable } from '@angular/core';
import Person from '../shared/personal.info';

@Injectable({ providedIn: 'root' })
export class DataService {
  public personalData: Person = Person.getInstance();

  constructor() {}
}
