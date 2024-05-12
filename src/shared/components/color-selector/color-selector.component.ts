import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import ThemeColorStateService from '../../stateManagement/themeColor.state.service';

@Component({
  selector: 'color-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-selector.component.html',
  styleUrl: './color-selector.component.scss',
})
export class ColorSelectorComponent {
  public isModalOpen: boolean = false;

  public themeColors: string[];

  constructor(private themeColorState: ThemeColorStateService) {
    this.themeColors = this.themeColorState.themeColors;
  }

  public openModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  public selectThemeColor(color: string) {
    if (this.themeColorState.loaded === false) return;

    this.themeColorState.color = color;
    this.isModalOpen = !this.isModalOpen;
  }

  public overlayClick(): void {
    console.log('ldşsadlsşa');
    this.isModalOpen = !this.isModalOpen;
  }
}
