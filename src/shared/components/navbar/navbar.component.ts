import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav[navbar]',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [CommonModule],
  styleUrls: ['../../../globalStyles.css', './navbar.component.css'],
})
export class NavbarComponent {
  public isOpen: boolean = false;

  public openModal(): void {
    console.log('is oPen', this.isOpen);
    this.isOpen = true;
  }

  public closeModal(): void {
    this.isOpen = false;
  }
}
