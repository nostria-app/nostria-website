import { Injectable } from '@angular/core';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollRestorationService {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    // Listen for router navigation end events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Scroll to top of page on navigation end
      this.viewportScroller.scrollToPosition([0, 0]);
    });

    // Handle router scroll events for browser history
    this.router.events.pipe(
      filter(event => event instanceof Scroll)
    ).subscribe((event: Scroll) => {
      if (event.position) {
        // Backward navigation - restore the previous position
        this.viewportScroller.scrollToPosition(event.position);
      } else if (event.anchor) {
        // Anchor navigation
        this.viewportScroller.scrollToAnchor(event.anchor);
      } else {
        // Forward navigation - go to top
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
