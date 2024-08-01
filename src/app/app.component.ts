import { AfterViewInit, Component } from '@angular/core';
import { NavigationBar } from '../shared/component/navigation/navigation.component';
import { AboutComponent, LandingComponent, ContactComponent } from '../section';
import { FooterComponent } from '../shared/component/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/src/style/main.style.scss', './app.component.scss'],
  standalone: true,
  imports: [
    NavigationBar,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor() {}

  public ngAfterViewInit(): void {}
}
