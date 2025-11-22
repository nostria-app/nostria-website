import { Component, inject, PLATFORM_ID, DOCUMENT } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ScrollRestorationService } from './services/scroll-restoration.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Nostria';

  private readonly platform = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  constructor(
    // Inject the service to initialize it
    private scrollService: ScrollRestorationService
  ) {
    if (isPlatformBrowser(this.platform)) {
      // Safe to use document, window, localStorage, etc. :-)
      // Add any browser-specific initialization here
    }

    if (isPlatformServer(this.platform)) {
      // Server-side specific code
      // For SSR/SSG implementations
    }
  }
}
