import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'color-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-selector.component.html',
  styleUrl: './color-selector.component.css',
})
export class ColorSelectorComponent {
  public isModalOpen: boolean = false;

  public openModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }
}
