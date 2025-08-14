import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-premium',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.scss'
})
export class PremiumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setupPricingToggle();
  }

  setupPricingToggle(): void {
    // This would be executed after view init in a real implementation
    setTimeout(() => {
      const billingToggle = document.getElementById('billing-toggle') as HTMLInputElement;
      if (billingToggle) {
        billingToggle.addEventListener('change', () => {
          this.togglePricing(billingToggle.checked);
        });
      }
    }, 0);
  }

  togglePricing(isYearly: boolean): void {
    const yearlyElements = document.querySelectorAll('.yearly');
    const monthlyElements = document.querySelectorAll('.monthly');
    const toggleLabels = document.querySelectorAll('.toggle-label');
    
    if (isYearly) {
      // Show yearly prices, hide monthly prices
      yearlyElements.forEach(el => el.classList.remove('hide'));
      monthlyElements.forEach(el => el.classList.add('hide'));
      
      // Update toggle labels
      toggleLabels[0].classList.remove('active');
      toggleLabels[1].classList.add('active');
      
      // Update pricing duration text
      document.querySelectorAll('.pricing-duration').forEach(el => {
        const pricingCard = el.closest('.pricing-card');
        if (pricingCard && !pricingCard.querySelector('.pricing-duration-free')) {
          el.textContent = '/month, billed yearly';
        }
      });
    } else {
      // Show monthly prices, hide yearly prices
      yearlyElements.forEach(el => el.classList.add('hide'));
      monthlyElements.forEach(el => el.classList.remove('hide'));
      
      // Update toggle labels
      toggleLabels[0].classList.add('active');
      toggleLabels[1].classList.remove('active');
      
      // Update pricing duration text
      document.querySelectorAll('.pricing-duration').forEach(el => {
        const pricingCard = el.closest('.pricing-card');
        if (pricingCard && !pricingCard.querySelector('.pricing-duration-free')) {
          el.textContent = '/month, billed quarterly';
        }
      });
    }
  }
}
