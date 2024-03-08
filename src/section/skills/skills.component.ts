import { Component } from '@angular/core';
import Person from '../../shared/personal.info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section[skills]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  public me: Person = new Person();
}
