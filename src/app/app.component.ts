import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { LandingComponent } from '../section/landing/landing.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { PersonalComponent } from '../section/personal/personal.component';
import { SkillsComponent } from '../section/skills/skills.component';
import { ContactComponent } from '../section/contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ColorSelectorComponent } from '../shared/components/color-selector/color-selector.component';
import ThemeColorStateService from '../shared/stateManagement/themeColor.state.service';
import { FrontendSVGComponent } from '../svgComponents/components/frontend.svg.component';
import { BackendSVGComponent } from '../svgComponents/components/backend.svg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles/button.styles.scss'],
  standalone: true,
  imports: [
    FrontendSVGComponent,
    NavbarComponent,
    LandingComponent,
    PersonalComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ColorSelectorComponent,
    BackendSVGComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor(private themeStateService: ThemeColorStateService) {}

  public ngAfterViewInit(): void {
    this.themeStateService.loaded = true;
  }
}
