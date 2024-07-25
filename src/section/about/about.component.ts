import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/component/sectionheading/sectionheading.component';
import {
  AngularIcon,
  AssemblerIcon,
  UserIcon,
} from '../../shared/svgComponent';

@Component({
  selector: 'section[about]',
  standalone: true,
  imports: [SectionHeadingComponent, UserIcon, AssemblerIcon, AngularIcon],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
