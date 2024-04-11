import { Component, ViewEncapsulation } from '@angular/core';
import { LandingComponent } from '../section/landing/landing.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { PersonalComponent } from '../section/personal/personal.component';
import { SkillsComponent } from '../section/skills/skills.component';
import { ContactComponent } from '../section/contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ColorSelectorComponent } from '../shared/components/color-selector/color-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../globalStyles.css', './app.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    LandingComponent,
    PersonalComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ColorSelectorComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'portfolio';
}
