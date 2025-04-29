import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink
  ],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  // Sections from learn component
  sections = [
    {
      title: 'What is Nostria?',
      content: 'Nostria is a client for the Nostr protocol designed for global scale and enhanced user experience. It aims to make the Nostr protocol accessible to everyone, focusing on performance and ease of use.',
      icon: 'info'
    },
    {
      title: 'Global Scale',
      content: 'The goal of Nostria is to have a client that can enable global scale on Nostr. This means efficient data handling, optimized network requests, and a responsive interface that works well and is fully decentralized.',
      icon: 'public'
    },
    {
      title: 'Relay Connectivity',
      content: 'One of the important features is that the client will automatically connect to each individual user\'s Relays and get their data. This can be a privacy concern for some users, so it is advised to either use Tor or another Nostr client if automatic connection across relays is not wanted.',
      icon: 'dns'
    },
    {
      title: 'Multiple Accounts',
      content: 'Nostria works great with multiple accounts, with quick account switching. You can easily manage different identities for different purposes, all from within the same application interface.',
      icon: 'people'
    },
    {
      title: 'Security Options',
      content: 'Nostria allows many different ways to keep your private key secure, from extension signing, hardware NFC card signing on Android phones, to remote signing. This flexibility ensures you can choose the security level that best fits your needs.',
      icon: 'security'
    }
  ];

  // FAQs from learn component
  faqs = [
    {
      question: 'What is Nostr?',
      answer: 'Nostr (Notes and Other Stuff Transmitted by Relays) is a decentralized protocol that enables global, censorship-resistant social media. It uses public-key cryptography and doesn\'t rely on any trusted central server.'
    },
    {
      question: 'How does Nostria handle privacy?',
      answer: 'Nostria connects to multiple relays to fetch user data, which may raise privacy concerns. If you\'re concerned about this, you can use Tor for additional privacy or choose another client with different connectivity patterns.'
    },
    {
      question: 'Can I use Nostria without exposing my private key?',
      answer: 'Yes! Nostria supports various signing methods including browser extensions (like nos2x), NFC hardware cards on Android, and remote signing, allowing you to keep your private key secure and offline.'
    },
    {
      question: 'How do I switch between accounts?',
      answer: 'Nostria makes account switching simple. Just open the profile menu and select from your available accounts to instantly switch between them.'
    },
    {
      question: 'What makes Nostria different from other Nostr clients?',
      answer: 'Nostria is designed with global scale in mind, focusing on performance optimization and user experience. Its intelligent relay connectivity and multi-account support make it particularly suited for power users and those needing fast access to data across the Nostr network.'
    }
  ];

  // Features categories and their details
  featureCategories = [
    {
      id: 'user-experience',
      title: 'User Experience',
      features: [
        {
          title: 'Intuitive Interface',
          description: 'Clean, modern design that makes navigating the Nostr network simple for both beginners and power users.',
          icon: 'material-symbols-outlined auto_fix'
        },
        {
          title: 'Customizable Themes',
          description: 'Choose from multiple themes or create your own to personalize your Nostria experience.',
          icon: 'material-symbols-outlined palette'
        },
        {
          title: 'Multi-column Layout',
          description: 'Power users can view multiple timelines simultaneously with our flexible column layout system.',
          icon: 'material-symbols-outlined view_column'
        },
        {
          title: 'Advanced Filters',
          description: 'Filter your timeline by content type, keywords, authors, and more to focus on what matters to you.',
          icon: 'material-symbols-outlined filter_alt'
        }
      ]
    },
    {
      id: 'performance',
      title: 'Performance',
      features: [
        {
          title: 'Lightning Fast Load Times',
          description: 'Optimized client architecture ensures quick startup and responsive interactions.',
          icon: 'material-symbols-outlined bolt'
        },
        {
          title: 'Efficient Caching',
          description: 'Smart local caching reduces redundant network requests and speeds up your browsing experience.',
          icon: 'material-symbols-outlined database'
        },
        {
          title: 'Background Syncing',
          description: 'Stay up-to-date even when offline with background synchronization that updates when you reconnect.',
          icon: 'material-symbols-outlined sync'
        },
        {
          title: 'Optimized Media Loading',
          description: 'Intelligent media loading prioritizes visible content for faster scrolling and reduced data usage.',
          icon: 'material-symbols-outlined perm_media'
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      features: [
        {
          title: 'User Relays',
          description: 'Premium users get dedicated relay servers for faster message propagation and improved reliability.',
          icon: 'material-symbols-outlined dns'
        },
        {
          title: 'Media Servers',
          description: 'Store and deliver your media content through our optimized, censorship-resistant content delivery network.',
          icon: 'material-symbols-outlined cloud'
        },
        {
          title: 'Discovery Relays',
          description: 'Find relevant content and people through our specialized discovery relays with advanced filtering.',
          icon: 'material-symbols-outlined explore'
        },
        {
          title: 'Global Scale',
          description: 'Nostria\'s infrastructure is built to scale globally, ensuring consistent performance worldwide.',
          icon: 'material-symbols-outlined public'
        }
      ]
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform',
      features: [
        {
          title: 'Web App',
          description: 'Access Nostria from any modern web browser without downloading software.',
          icon: 'material-symbols-outlined public'
        },
        {
          title: 'Desktop Apps',
          description: 'Native applications for Windows, macOS, and Linux with OS-specific optimizations.',
          icon: 'material-symbols-outlined desktop_windows'
        },
        {
          title: 'Mobile Apps',
          description: 'iOS and Android apps designed specifically for the mobile experience.',
          icon: 'material-symbols-outlined smartphone'
        },
        {
          title: 'Synchronized Experience',
          description: 'Seamlessly switch between devices while maintaining your exact place in conversations and feeds.',
          icon: 'material-symbols-outlined sync_alt'
        }
      ]
    }
  ];

  // Method to scroll to a specific section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  // Track accordion state
  expandedFaqs: boolean[] = [];
  
  toggleFaq(index: number): void {
    this.expandedFaqs[index] = !this.expandedFaqs[index];
  }
  
  isFaqExpanded(index: number): boolean {
    return this.expandedFaqs[index] === true;
  }
}