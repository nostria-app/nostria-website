import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Footer initialization logic if needed
  }

  submitNewsletter(event: Event): void {
    event.preventDefault();
    // Handle newsletter subscription logic
    console.log('Newsletter subscription submitted');
    // Would integrate with a newsletter service in a real implementation
  }
}
