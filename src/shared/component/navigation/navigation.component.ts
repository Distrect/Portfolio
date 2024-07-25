import { Component } from '@angular/core';
import { AppIcon } from '../../svgComponent/app.svg.component';
import { UserIcon } from '../../svgComponent/user.svg.component';
import { DialIcon } from '../../svgComponent/dial.svg.component';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'nav[navigation]',
  standalone: true,
  imports: [AppIcon, UserIcon, DialIcon, ContainerComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationBar {}
