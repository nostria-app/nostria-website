import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ScrollRestorationService } from './services/scroll-restoration.service';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly platform = inject(PLATFORM_ID);
  private readonly scrollService = inject(ScrollRestorationService);
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.init();

    if (isPlatformBrowser(this.platform)) {
      // Safe to use document, window, localStorage, etc. :-)
      // Add any browser-specific initialization here
    }

    if (isPlatformServer(this.platform)) {
      // Server-side specific code
      // For SSR/SSG implementations
    }

    void this.scrollService;
  }
}
