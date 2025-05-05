import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  // Form model for contact form
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.setupContactForm();
    this.initScrollAnimations();
  }

  setupContactForm(): void {
    // Keep this for backward compatibility, but it's no longer needed
    // as we removed the form
  }

  // Method to handle animations when scrolling
  initScrollAnimations(): void {
    // This could be implemented with IntersectionObserver API
    // to add animations when elements come into view
    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.2 });

    // Apply to timeline items, team members, testimonials, etc.
    document.querySelectorAll('.timeline-item, .team-member, .principle-card').forEach(el => {
      animateOnScroll.observe(el);
    });
  }
}
