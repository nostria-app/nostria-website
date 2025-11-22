import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '(window:scroll)': 'onWindowScroll()',
    '(document:click)': 'closeInstallMenu()'
  }
})
export class HeaderComponent {
  isMenuOpen = false;
  isInstallMenuOpen = false;
  isScrolled = false;
  canInstall = false;

  constructor() {
    // Check if navigator.install is supported (Chrome/Edge/Brave 143+)
    // @ts-ignore
    this.canInstall = typeof navigator !== 'undefined' && typeof navigator.install === 'function';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('no-scroll', this.isMenuOpen);
  }

  toggleInstallMenu(event: Event): void {
    event.stopPropagation();
    this.isInstallMenuOpen = !this.isInstallMenuOpen;
  }

  installApp(): void {
    this.isInstallMenuOpen = false;
    // @ts-ignore
    if (typeof navigator.install === 'function') {
      // @ts-ignore
      navigator.install(
        'https://nostria.app', 
        'https://nostria.app/app.nostria'
      );
    } else {
      console.warn('navigator.install is not supported');
    }
  }

  closeMenu(): void {
    // Only close menu if it's currently open
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.classList.remove('no-scroll');
    }
  }

  closeInstallMenu(): void {
    this.isInstallMenuOpen = false;
  }

  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
