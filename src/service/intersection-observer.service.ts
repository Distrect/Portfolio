import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IntersectionObserverService {
  private intersectionSubject$ = new Subject();

  constructor() {}

  public addObserver(
    callBack: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    const newObserver = new IntersectionObserver(callBack, options);

    return newObserver;
  }
}
