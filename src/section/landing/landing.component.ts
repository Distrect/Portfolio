import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'section[landing]',
  templateUrl: './landing.component.html',
  imports: [NavbarComponent],
  styleUrls: [
    '../../globalStyles.css',
    './landing.component.css',
    '../../styles.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent {}
