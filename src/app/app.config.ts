import { ApplicationConfig, provideZoneChangeDetection, PLATFORM_ID, inject, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

// Import the service
import { ScrollRestorationService } from './services/scroll-restoration.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions() // Enable view transitions for smoother page changes
    ),
    provideClientHydration(withEventReplay()),
    // Initialize the ScrollRestorationService
    ScrollRestorationService,
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return () => {
          const platformId = inject(PLATFORM_ID);
          if (isPlatformBrowser(platformId)) {
            const win = window as any;
            // Load the YouTube API
            if (!win.YT) {
              const tag = document.createElement('script');
              tag.src = 'https://www.youtube.com/iframe_api';
              document.body.appendChild(tag);
            }
          }
        };
      },
      multi: true
    }
  ]
};
