import { Component, ChangeDetectionStrategy } from '@angular/core';
import { testimonialsData } from './testimonials.data';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  readonly testimonials = testimonialsData.map(testimonial => ({
    ...testimonial,
    publishedLabel: new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(new Date(testimonial.publishedAt))
  }));
}
