import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared[heading]',
  templateUrl: './sectionheading.component.html',
  styleUrl: './sectionheading.component.scss',
})
export class SectionHeadingComponent {
  @Input('headerText') headerText!: string;
}
