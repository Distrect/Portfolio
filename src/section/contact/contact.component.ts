import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/component/sectionheading/sectionheading.component';
import { DialIcon } from '../../shared/svgComponent';

@Component({
  selector: 'section[contact]',
  standalone: true,
  imports: [SectionHeadingComponent, DialIcon],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
