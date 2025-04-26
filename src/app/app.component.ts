import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';

  private readonly platform = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  constructor() {
    if (isPlatformBrowser(this.platform)) {
      console.warn("browser");
      // Safe to use document, window, localStorage, etc. :-)
      console.log(document);
    }

    if (isPlatformServer(this.platform)) {
      console.warn("server");
      // Not smart to use document here, however, we can inject it ;-)
      console.log(this.document);
    }
  }
}
