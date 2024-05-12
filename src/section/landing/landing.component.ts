import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Button } from '../../shared/ui/button/button.ui.component';
import { SendSVGComponent } from '../../svgComponents/components/send.svg.component';

@Component({
  standalone: true,
  selector: 'section[landing]',
  templateUrl: './landing.component.html',
  imports: [NavbarComponent, Button, SendSVGComponent],
  styleUrls: ['./landing.component.scss', '../../styles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent {}
