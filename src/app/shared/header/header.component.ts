import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    // Check if navigator.install is supported (Chrome/Edge/Brave 143+)
    // @ts-ignore
    this.canInstall = isPlatformBrowser(this.platformId) && typeof navigator !== 'undefined' && typeof navigator.install === 'function';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('no-scroll', this.isMenuOpen);
    }
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
      if (isPlatformBrowser(this.platformId)) {
        document.body.classList.remove('no-scroll');
      }
    }
  }

  closeInstallMenu(): void {
    this.isInstallMenuOpen = false;
  }

  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isScrolled = window.scrollY > 50;
  }
}
