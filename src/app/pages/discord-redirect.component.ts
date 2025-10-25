import { Component, OnInit } from '@angular/core';

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
  ngOnInit() {
    window.location.href = 'https://discord.gg/rGZKABqKSD';
  }
}
