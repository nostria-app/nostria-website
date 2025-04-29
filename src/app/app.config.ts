import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

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
    ScrollRestorationService
  ]
};
