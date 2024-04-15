import { Component } from '@angular/core';

@Component({
  selector: 'footer[f]',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../../../styles.css'],
})
export class FooterComponent {
  public getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }
}
