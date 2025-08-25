import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PitchDeckDownloadComponent } from '../../components/pitch-deck-download/pitch-deck-download.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PitchDeckDownloadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Properties for any interactive elements like testimonial slider
  currentTestimonialIndex = 0;
  testimonials = [
    {
      avatar: 'assets/avatars/user1.jpg',
      text: 'Nostria has completely changed how I use Nostr. The interface is intuitive and the premium features are well worth it for anyone serious about the platform.',
      author: 'Alex Morgan',
      position: 'Crypto Enthusiast',
      rating: 5
    },
    {
      avatar: 'assets/avatars/user2.jpg',
      text: 'As a content creator on Nostr, Nostria\'s premium features have been a game-changer for me. The media servers and discovery relays help me reach a wider audience.',
      author: 'Jamie Chen',
      position: 'Digital Creator',
      rating: 5
    },
    {
      avatar: 'assets/avatars/user3.jpg',
      text: 'I\'ve tried several Nostr clients, but Nostria stands out with its balance of simplicity and power. The cross-platform support is fantastic - my experience is consistent everywhere.',
      author: 'Sam Reeves',
      position: 'Software Developer',
      rating: 5
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    this.setupTestimonialsSlider();
  }

  ngAfterViewInit(): void {
    // Only run scroll reveal setup in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollReveal();
    }
  }

  setupTestimonialsSlider(): void {
    // In a real implementation, would set up an automated slider
    // For now, it's just static with the dots being clickable
  }

  changeTestimonial(index: number): void {
    this.currentTestimonialIndex = index;
    // Would update the displayed testimonial
  }

  scrollToSection(sectionId: string): void {
    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  setupScrollReveal(): void {
    // Ensure we're in browser environment before accessing DOM
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (!revealElements.length) return;
    
    const observerOptions = {
      root: null, // use viewport as root
      rootMargin: '0px 0px -100px 0px', // trigger slightly before element comes into view
      threshold: 0.1 // trigger when 10% of element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    revealElements.forEach(element => {
      // Reset to ensure clean initial state
      element.classList.remove('revealed');
      observer.observe(element);
    });
  }
}
