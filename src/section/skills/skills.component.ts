import {
  AfterViewInit,
  Component,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
} from '@angular/core';
import Person from '../../shared/personal.info';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { IntersectionObserverService } from '../../service/intersection-observer.service';

@Component({
  selector: 'section[skills]',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit, OnDestroy, OnInit {
  private observer!: IntersectionObserver;
  public me: Person = new Person();

  constructor(
    private intersectionObserverService: IntersectionObserverService
  ) {}

  ngOnInit(): void {}

  private initObserver(): void {
    const areaItemsContainer = document.querySelectorAll('.area-item');

    if (areaItemsContainer === null) throw new Error('Element is Null');

    const intersectionObserverOptions: IntersectionObserverInit = {
      threshold: 0.25,
    };

    const callBack: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(({ target, intersectionRatio, isIntersecting }) => {
        if (!isIntersecting) return;

        target.classList.add('left-to-appear-anim');
      });
    };

    this.observer = this.intersectionObserverService.addObserver(
      callBack,
      intersectionObserverOptions
    );

    areaItemsContainer.forEach((el) => this.observer.observe(el));
  }

  public ngAfterViewInit(): void {
    this.initObserver();
  }

  public ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
