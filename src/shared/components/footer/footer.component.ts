import { Component } from '@angular/core';

@Component({
  selector: 'footer[f]',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../../styles.scss'],
})
export class FooterComponent {
  public getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }
}
