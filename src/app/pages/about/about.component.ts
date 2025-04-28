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
  }

  setupContactForm(): void {
    setTimeout(() => {
      const form = document.querySelector('.contact-form');
      
      if (form) {
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          
          // In a real app, we would send the form data to a backend
          console.log('Contact form submitted:', this.contactForm);
          
          // Show success message
          alert('Thank you for your message! We will get back to you shortly.');
          
          // Reset form
          (event.target as HTMLFormElement).reset();
        });
      }
    }, 0);
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

    // Apply to timeline items, team members, etc.
    document.querySelectorAll('.timeline-item, .team-member, .principle-card').forEach(el => {
      animateOnScroll.observe(el);
    });
  }
}
