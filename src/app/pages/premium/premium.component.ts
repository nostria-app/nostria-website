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
      yearlyElements.forEach(el => el.classList.remove('hide'));
      monthlyElements.forEach(el => el.classList.add('hide'));
      toggleLabels[0].classList.remove('active');
      toggleLabels[1].classList.add('active');
      
      document.querySelectorAll('.pricing-duration').forEach(el => {
        el.textContent = '/month, billed yearly';
      });
    } else {
      yearlyElements.forEach(el => el.classList.add('hide'));
      monthlyElements.forEach(el => el.classList.remove('hide'));
      toggleLabels[0].classList.add('active');
      toggleLabels[1].classList.remove('active');
      
      document.querySelectorAll('.pricing-duration').forEach(el => {
        if (el.parentElement?.querySelector('.pricing-number')?.textContent !== '0') {
          el.textContent = '/month';
        }
      });
    }
  }
}
