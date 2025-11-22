import { Component, HostListener } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('no-scroll', this.isMenuOpen);
  }

  closeMenu(): void {
    // Only close menu if it's currently open
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.classList.remove('no-scroll');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
