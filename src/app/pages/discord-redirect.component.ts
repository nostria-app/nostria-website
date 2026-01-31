import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-discord-redirect',
  template: '<p>Redirecting to Discord...</p>',
  styles: [`
    p {
      text-align: center;
      margin-top: 2rem;
      font-size: 1.2rem;
    }
  `]
})
export class DiscordRedirectComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    window.location.href = 'https://discord.gg/rGZKABqKSD';
  }
}
