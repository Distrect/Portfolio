import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';

@Directive({ selector: '[dropdown-directive]' })
export class DropdownDirective {
  private isDropdownOpen: boolean = false;
  private isMobile = window.matchMedia('(max-width:1000px)');

  constructor(private el: ElementRef<HTMLElement>) {}

  private getDropdownElement() {
    const dropdownElement = this.el.nativeElement.querySelector(
      '.dropdown'
    ) as HTMLElement;

    if (dropdownElement === null) throw Error('Dropdown item is null');

    return dropdownElement;
  }

  private setDropdownStatus(open: boolean) {
    const dropdownElement = this.getDropdownElement();

    if (open) {
      dropdownElement.style.display = 'block';
      this.isDropdownOpen = true;
    } else {
      dropdownElement.style.display = 'none';
      this.isDropdownOpen = false;
    }
  }

  @HostListener('mouseenter', ['$event'])
  public mouseEnter(event: MouseEvent) {
    if (this.isMobile.matches === true) return;

    this.setDropdownStatus(true);
  }

  @HostListener('mouseleave', ['$event'])
  public mouseleave(event: MouseEvent) {
    if (this.isMobile.matches === true) return;
    const dropdownElement = this.getDropdownElement();

    dropdownElement.style.display = 'none';
    this.isDropdownOpen = false;
  }

  @HostListener('click', ['$event'])
  public click(event: MouseEvent) {
    if (
      event.target instanceof Element &&
      event.target.classList.contains('dropdown-item')
    ) {
      console.log('Dropdown Item Clicked');
      this.setDropdownStatus(false);
      return;
    }

    if (this.isMobile.matches === false) return;

    console.log('Click Fired');

    console.log('dasdsa');

    if (this.isDropdownOpen) {
      this.setDropdownStatus(false);
    } else {
      this.setDropdownStatus(true);
    }
  }

  @HostListener('document:click', ['$event'])
  public closeDropdown(event: MouseEvent) {
    if (event.target === null) throw Error('AAAa');

    if (
      this.isDropdownOpen &&
      this.el.nativeElement.contains(event.target as Node) === false
    ) {
      console.log('Fired');
      const dropdownElement = this.getDropdownElement();
      dropdownElement.style.display = 'none';
      this.isDropdownOpen = false;
      return;
    }
  }
}
