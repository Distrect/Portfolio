import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav[navbar]',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [CommonModule],
  styleUrls: ['../../../globalStyles.css', './navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  public navigationImtes: Record<string, string> = {
    'About Me': 'personal-section',
    'My Skills': 'skill-section',
    'Contact Me': 'contact-section',
  };

  public isOpen: boolean = false;

  public ngAfterViewInit(): void {
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
