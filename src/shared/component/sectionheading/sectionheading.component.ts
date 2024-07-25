import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'shared[heading]',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './sectionheading.component.html',
  styleUrl: './sectionheading.component.scss',
})
export class SectionHeadingComponent {
  @Input('headerText') headerText!: string;
}
