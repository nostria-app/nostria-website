import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    '(document:click)': 'closeInstallMenu(); closeAndroidMenu()'
  }
})
export class HomeComponent {
  isInstallMenuOpen = false;
  isAndroidMenuOpen = false;
  canInstall = false;

  constructor() {
    // Chrome/Edge/Brave 143+ supports navigator.install()
    // @ts-ignore
    this.canInstall = typeof navigator !== 'undefined' && typeof navigator.install === 'function';
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
      navigator.install('https://nostria.app', 'https://nostria.app/app.nostria');
      return;
    }
    console.warn('navigator.install is not supported');
  }

  closeInstallMenu(): void {
    this.isInstallMenuOpen = false;
  }

  toggleAndroidMenu(event: Event): void {
    event.stopPropagation();
    this.isAndroidMenuOpen = !this.isAndroidMenuOpen;
  }

  closeAndroidMenu(): void {
    this.isAndroidMenuOpen = false;
  }
}
