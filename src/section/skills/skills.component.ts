import { Component } from '@angular/core';
import Person from '../../shared/personal.info';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'section[skills]',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  public me: Person = new Person();
}
