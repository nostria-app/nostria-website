import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  // Track current filter
  currentFilter: string = 'all';
  
  // Mock form data for demonstration
  formData: {
    name: string;
    title: string;
    category: string;
    rating: number;
    testimonial: string;
    photo: File | null;
  } = {
    name: '',
    title: '',
    category: '',
    rating: 5,
    testimonial: '',
    photo: null
  };

  constructor() { }

  ngOnInit(): void {
    this.setupFilterButtons();
    this.setupFormSubmission();
  }

  setupFilterButtons(): void {
    // We'll use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const filterButtons = document.querySelectorAll('.filter-btn');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          const target = event.currentTarget as HTMLButtonElement;
          const filter = target.getAttribute('data-filter') || 'all';
          
          // Update active state
          filterButtons.forEach(btn => btn.classList.remove('active'));
          target.classList.add('active');
          
          this.filterTestimonials(filter);
        });
      });
    }, 0);
  }

  filterTestimonials(filter: string): void {
    this.currentFilter = filter;
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  setupFormSubmission(): void {
    setTimeout(() => {
      const form = document.querySelector('.testimonial-form');
      
      if (form) {
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          
          // In a real app, we would send the form data to a backend
          console.log('Testimonial submitted:', this.formData);
          
          // Show success message or redirect
          alert('Thank you for sharing your testimonial! It will be reviewed and published shortly.');
          
          // Reset form
          (event.target as HTMLFormElement).reset();
        });
      }
      
      // Handle file input for photo
      const photoInput = document.getElementById('photo');
      if (photoInput) {
        photoInput.addEventListener('change', (event) => {
          const files = (event.target as HTMLInputElement).files;
          if (files && files.length > 0) {
            this.formData.photo = files[0];
          }
        });
      }
    }, 0);
  }

  // Method to load more testimonials
  loadMoreTestimonials(): void {
    // In a real application, this would fetch more testimonials from an API
    alert('In a real application, this would load more testimonials from the server.');
  }
}
