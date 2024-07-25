import { Component } from '@angular/core';
import { IllustrationComponent } from './components/illustration/illustration.component';

@Component({
  selector: 'section[landing]',
  standalone: true,
  imports: [IllustrationComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
