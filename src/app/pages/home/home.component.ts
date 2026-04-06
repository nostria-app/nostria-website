import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeDownloadPlatforms, type DownloadPlatformId } from '../../shared/downloads/downloads.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    '(document:click)': 'closeInstallMenu(); closePlatformMenu()'
  }
})
export class HomeComponent {
  isInstallMenuOpen = false;
  activePlatformMenu: DownloadPlatformId | null = null;
  canInstall = false;
  readonly downloadPlatforms = homeDownloadPlatforms;

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

  togglePlatformMenu(platformId: DownloadPlatformId, event: Event): void {
    event.stopPropagation();
    this.activePlatformMenu = this.activePlatformMenu === platformId ? null : platformId;
  }

  isPlatformMenuOpen(platformId: DownloadPlatformId): boolean {
    return this.activePlatformMenu === platformId;
  }

  closePlatformMenu(): void {
    this.activePlatformMenu = null;
  }
}
