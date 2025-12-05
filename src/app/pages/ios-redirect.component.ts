import { Component, OnInit } from '@angular/core';

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
  ngOnInit() {
    window.location.href = 'https://testflight.apple.com/join/ysTpCtum';
  }
}
  