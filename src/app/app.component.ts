import { AfterViewInit, Component } from '@angular/core';
import { NavigationBar } from '../shared/component/navigation/navigation.component';
import { AboutComponent, LandingComponent, ContactComponent } from '../section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/src/style/main.style.scss', './app.component.scss'],
  standalone: true,
  imports: [NavigationBar, LandingComponent, AboutComponent, ContactComponent],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor() {}

  public ngAfterViewInit(): void {}
}
