import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-funding',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './funding.component.html',
  styleUrl: './funding.component.scss'
})
export class FundingComponent implements OnInit {
  // Countdown properties
  daysLeft: number = 0;
  hoursLeft: number = 0;
  minutesLeft: number = 0;
  secondsLeft: number = 0;
  fundingEnded: boolean = false;
  fundingStarted: boolean = false;

  // Investment tiers
  investmentTiers = [
    {
      name: 'Supporter',
      amount: '$1,000',
      benefits: [
        'Convertible Notes with 15% discount rate',
        'Pro-rata rights for future rounds',
        'Supporter Exclusive Badge',
        'Nostria Premium account (6 months)'
      ],
      highlighted: false
    },
    {
      name: 'Angel',
      amount: '$5,000',
      benefits: [
        'All Supporter benefits',
        'Quarterly investor calls',
        'Name in app credits',
        'Investor Exclusive Badge',
        'Early access to new features',
        'Nostria Premium account (1 years)'
      ],
      highlighted: true
    },
    {
      name: 'Partner',
      amount: '$10,000+',
      benefits: [
        'All Angel benefits',
        'Direct access to Nostria team',
        'Input on product roadmap',
        'Nostria Premium+ account (1 year)'
      ],
      highlighted: false
    }
  ];

  // Funding milestones
  fundingMilestones = [
    {
      title: 'Infrastructure Setup',
      amount: '$10,000',
      description: 'Deploy global relay network and media servers to support the Nostria app, continue development on the Nostria app.',
      date: 'Month 1'
    },
    {
      title: 'Core Feature Development',
      amount: '$10,000',
      description: 'Enhance premium features, improve app and multi-platform support.',
      date: 'Month 2'
    },
    {
      title: 'Marketing & Growth',
      amount: '$10,000',
      description: 'User acquisition, community building, and preparing for Seed Round.',
      date: 'Month 3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initCountdown();
  }

  initCountdown(): void {
    // Set funding dates
    const fundingStartDate = new Date('May 11, 2025 00:00:00 UTC').getTime();
    const fundingEndDate = new Date('May 31, 2025 23:59:59 UTC').getTime();
    const now = new Date().getTime();

    // Check if funding has started or ended
    this.fundingStarted = now >= fundingStartDate;
    this.fundingEnded = now >= fundingEndDate;

    // Only run countdown if funding is active
    if (this.fundingStarted && !this.fundingEnded) {
      this.updateCountdown(fundingEndDate);
      setInterval(() => this.updateCountdown(fundingEndDate), 1000);
    } else if (!this.fundingStarted) {
      this.updateCountdown(fundingStartDate);
      setInterval(() => {
        const currentTime = new Date().getTime();
        if (currentTime >= fundingStartDate) {
          // Funding has started, refresh the page to update UI
          window.location.reload();
        } else {
          this.updateCountdown(fundingStartDate);
        }
      }, 1000);
    }
  }

  updateCountdown(targetDate: number): void {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      // If countdown is finished
      this.daysLeft = 0;
      this.hoursLeft = 0;
      this.minutesLeft = 0;
      this.secondsLeft = 0;
      return;
    }

    // Time calculations
    this.daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
  }

  scrollToInvestment(): void {
    const element = document.getElementById('investment-options');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openInvestModal(): void {
    alert('In a real implementation, this would open a secure investment modal or redirect to an investment platform');
  }
}
