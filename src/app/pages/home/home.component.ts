import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
    this.setupTestimonialsSlider();
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
