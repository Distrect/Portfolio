import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/component/sectionheading/sectionheading.component';
import {
  AngularIcon,
  AssemblerIcon,
  UserIcon,
} from '../../shared/svgComponent';
import Person from '../../shared/personal.info';
import { CommonModule } from '@angular/common';
import { LevelPipe } from '../../pipe/custom.pipe';

@Component({
  selector: 'section[about]',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    UserIcon,
    AssemblerIcon,
    AngularIcon,
    CommonModule,
    LevelPipe,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public me: Person = new Person();
}
