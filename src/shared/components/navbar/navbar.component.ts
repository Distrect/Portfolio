import { IntersectionObserverService } from './../../../service/intersection-observer.service';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { LogoSvgComponent } from '../../../svgComponents/logo.svg.component';

@Component({
  selector: 'nav[navbar]',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [LogoSvgComponent, CommonModule],
  styleUrls: ['../../../globalStyles.css', './navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  public navigationImtes: Record<string, string> = {
    'About Me': 'personal-section',
    'My Skills': 'skill-section',
    'Contact Me': 'contact-section',
  };

  constructor() {}

  public isOpen: boolean = false;

  private paintNavAfterTreshold(): void {
    const navEl: HTMLElement | null = document.querySelector('#navbar');

    if (navEl === null) throw new Error('Element is null');

    window.addEventListener('scroll', ({}) => {
      const navRect = navEl.getBoundingClientRect();
      const scrollTop = (
        document.documentElement ||
        document.body.parentNode ||
        document.body
      ).scrollTop;

      if (scrollTop > 0) {
        navEl.style.backgroundColor = '#141414';
      } else {
        navEl.style.backgroundColor = 'transparent';
      }
    });
  }

  public ngAfterViewInit(): void {
    this.paintNavAfterTreshold();
    window.addEventListener('resize', (e) => {
      if (window.matchMedia('(min-width:768px').matches) {
        this.isOpen = false;
      }
    });
  }

  private isMobile(): boolean {
    const media = window.matchMedia('(max-width:768px');

    return media.matches;
  }

  public openModal(): void {
    this.isOpen = true;
  }

  public closeModal(): void {
    this.isOpen = false;
  }

  public den() {
    if (this.isMobile()) {
      this.isOpen = false;
    }

    console.log('fkldsşkflşds');
  }

  get navigationItems() {
    return Object.keys(this.navigationImtes);
  }
}
