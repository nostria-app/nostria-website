import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ios-redirect',
  template: '<p>Redirecting to iOS TestFlight...</p>',
  styles: [`
    p {
      text-align: center;
      margin-top: 2rem;
      font-size: 1.2rem;
    }
  `]
})
export class IosRedirectComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    window.location.href = 'https://testflight.apple.com/join/ysTpCtum';
  }
}
  
