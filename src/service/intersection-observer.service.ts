import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IntersectionObserverService {
  constructor() {}

  public addObserver(
    callBack: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    const newObserver = new IntersectionObserver(callBack, options);

    return newObserver;
  }
}
