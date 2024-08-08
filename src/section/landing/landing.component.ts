import { Component } from '@angular/core';
import { IllustrationComponent } from './components/illustration/illustration.component';
import Person from '../../shared/personal.info';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'section[landing]',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  constructor(public dataService: DataService) {}
}
