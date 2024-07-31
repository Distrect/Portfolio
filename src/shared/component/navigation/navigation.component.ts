import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppIcon } from '../../svgComponent/app.svg.component';
import { UserIcon } from '../../svgComponent/user.svg.component';
import { DialIcon } from '../../svgComponent/dial.svg.component';
import { ContainerComponent } from '../container/container.component';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'nav[navigation]',
  standalone: true,
  imports: [AppIcon, UserIcon, DialIcon, ContainerComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationBar implements OnInit {
  @ViewChild('downloadBtn', { static: true }) downloadBtn!: ElementRef;

  public downloadBtnEvent!: Observable<Event>;

  constructor() {}

  public ngOnInit(): void {
    this.downloadBtnEvent = fromEvent(this.downloadBtn.nativeElement, 'click');
    this.downloadBtnEvent.subscribe(this.downloadFile);
  }

  public downloadFile() {
    const anchor = document.createElement('a');
    anchor.href = 'assets/cv/cv.pdf';
    anchor.download = 'samet-saricicek_cv.pdf';
    anchor.style.visibility = 'hidden';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}
