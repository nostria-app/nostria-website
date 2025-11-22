import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
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
      color: '#8e44ad',
      features: [
        {
          title: 'Easy signup',
          description: 'Two click signup, regionally optimized.',
          icon: 'material-symbols-outlined view_column',
          color: '#8e44ad',
          screenshot: 'assets/screenshots/screenshot-2025-11-22-160125.png'
        },
        {
          title: 'Intuitive Interface',
          description: 'Clean, modern design that makes navigating the Nostr network simple for both beginners and power users.',
          icon: 'material-symbols-outlined auto_fix',
          color: '#8e44ad', // Purple
          screenshot: 'assets/screenshots/screenshot-2025-11-22-145615.png'
        },
        {
          title: 'Command Palette',
          description: 'Quickly get to where you want to go within Nostria, with the new command palette, open it with ALT-P to filter and choose your command or action.',
          icon: 'material-symbols-outlined terminal',
          color: '#9b59b6', // Light purple
          screenshot: 'assets/screenshots/screenshot-2025-11-22-160242.png'
        },
        {
          title: 'Favorites',
          description: 'You can now organize your favorites and have them displayed at all times in the top toolbar, including a new flyout menu where you can drag and drop to organize your friends.',
          icon: 'material-symbols-outlined star',
          color: '#8e44ad', // Purple
          screenshot: 'assets/screenshots/screenshot-2025-11-22-145559.png'
        },
        {
          title: 'Threads',
          description: 'Users can make multiple threads that have one or more columns that shows various content from the Nostr social network.',
          icon: 'material-symbols-outlined view_week',
          color: '#9b59b6', // Light purple
          screenshot: 'assets/screenshots/screenshot-2025-11-22-160921.png'
        },
        {
          title: 'People',
          description: 'A dedicated people section to find and manage and those you follow and discover new connections.',
          icon: 'material-symbols-outlined filter_alt',
          color: '#9b59b6', // Light purple
          screenshot: 'assets/screenshots/screenshot-2025-11-22-145635.png'
        }
      ]
    },
    {
      id: 'ai-intelligence',
      title: 'AI & Intelligence',
      color: '#2ecc71', // Green
      features: [
        {
          title: 'Local AI Models',
          description: 'Nostria can now perform local AI models that will translate to many languages, you can record dictation (text-to-speech) for notes, you can validate the sentiment of your post before posting.',
          icon: 'material-symbols-outlined psychology',
          color: '#2ecc71', // Green
          screenshot: 'assets/screenshots/screenshot-2025-11-22-150516.png'
        },
        {
          title: 'Text-to-Speech',
          description: 'There is the ability to read aloud any Nostr event with beautiful voices built using AI.',
          icon: 'material-symbols-outlined record_voice_over',
          color: '#27ae60', // Darker green
          screenshot: 'assets/screenshots/screenshot-2025-11-22-160657.png'
        },
        {
          title: 'Privacy Focused',
          description: 'All models run locally with full privacy, no cloud provider receives any information or data.',
          icon: 'material-symbols-outlined security',
          color: '#2ecc71', // Green
          screenshot: 'assets/screenshots/screenshot-2025-11-22-150526.png'
        },
        {
          title: 'Translations',
          description: 'Translate posts and messages into your preferred language instantly using built-in AI translation models.',
          icon: 'material-symbols-outlined security',
          color: '#2ecc71', // Green
          screenshot: 'assets/screenshots/screenshot-2025-11-22-160642.png'
        }
      ]
    },
    {
      id: 'media-content',
      title: 'Media & Content',
      color: '#e67e22', // Orange
      features: [
        {
          title: 'Notes',
          description: 'Quickly and easily write your notes, or dictate them using voice-to-text and publish them to Nostr.',
          icon: 'material-symbols-outlined article',
          color: '#d35400', // Darker orange
          screenshot: 'assets/screenshots/screenshot-2025-11-22-150104.png'
        },
        {
          title: 'Articles',
          description: 'Nostria has a beautiful and simple article editor, making it smooth and seamless to write and publish long form content on Nostr.',
          icon: 'material-symbols-outlined article',
          color: '#d35400', // Darker orange
          screenshot: 'assets/screenshots/screenshot-2025-11-22-150255.png'
        },
        {
          title: 'Video Clips',
          description: 'Just like the old Vine app, you can record 6 second short clips and post fun videos to Nostr social network.',
          icon: 'material-symbols-outlined videocam',
          color: '#e67e22', // Orange
          screenshot: 'assets/screenshots/screenshot-2025-11-22-160400.png'
        },
        {
          title: 'Audio Clips',
          description: 'You can now send voice messages up to 60 seconds to anyone who wants to listen to you. You can reply with voice to other voice messages.',
          icon: 'material-symbols-outlined mic',
          color: '#d35400', // Darker orange
          screenshot: 'assets/screenshots/screenshot-2025-11-22-160413.png'
        },
        {
          title: 'Live Streams',
          description: 'You have an awesome live stream viewer built into Nostria now, with chat, zap goals and lots more features.',
          icon: 'material-symbols-outlined live_tv',
          color: '#e67e22', // Orange
          screenshot: 'assets/screenshots/screenshot-2025-11-22-145843.png'
        },
        {
          title: 'Media',
          description: 'View images and videos the user has posted in a beautiful gallery view.',
          icon: 'material-symbols-outlined live_tv',
          color: '#e67e22', // Orange
          screenshot: 'assets/screenshots/screenshot-2025-11-22-172043.png'
        }
      ]
    },
    {
      id: 'scaling',
      title: 'Global Scaling',
      color: '#2980b9', // Blue
      features: [
        {
          title: 'Decentralized Architecture',
          description: 'Distribute load across the network without relying on centralized relays, ensuring better resilience and global reach.',
          icon: 'material-symbols-outlined hub',
          color: '#2980b9', // Blue
          screenshot: ''
        },
        {
          title: 'Automatic Relay Usage',
          description: 'Automatically connects to the relays for each user, optimizing network traffic and reducing bottlenecks.',
          icon: 'material-symbols-outlined router',
          color: '#3498db', // Light blue
          screenshot: ''
        },
        {
          title: 'Load Balancing',
          description: 'Intelligently distributes requests across multiple relays to prevent overloading and ensure consistent performance.',
          icon: 'material-symbols-outlined balance',
          color: '#2980b9', // Blue
          screenshot: ''
        },
        {
          title: 'Discovery Relay',
          description: 'Utilizing high-performance Discovery Relay enables anyone to find everyone.',
          icon: 'material-symbols-outlined sync_alt',
          color: '#3498db', // Light blue
          screenshot: ''
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      color: '#16a085', // Teal
      features: [
        {
          title: 'User Relays',
          description: 'Premium users get dedicated relay servers for faster message propagation and improved reliability.',
          icon: 'material-symbols-outlined dns',
          color: '#16a085', // Teal
          screenshot: ''
        },
        {
          title: 'Media Servers',
          description: 'Store and deliver your media content through our optimized, censorship-resistant content delivery network.',
          icon: 'material-symbols-outlined cloud',
          color: '#1abc9c', // Light teal
          screenshot: ''
        },
        {
          title: 'Discovery Relays',
          description: 'Find relevant content and people through our specialized discovery relays with advanced filtering.',
          icon: 'material-symbols-outlined explore',
          color: '#16a085', // Teal
          screenshot: ''
        },
        {
          title: 'Global Scale',
          description: 'Nostria\'s infrastructure is built to scale globally, ensuring consistent performance worldwide.',
          icon: 'material-symbols-outlined public',
          color: '#1abc9c', // Light teal
          screenshot: ''
        }
      ]
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform',
      color: '#c0392b', // Red
      features: [
        {
          title: 'Web App',
          description: 'Access Nostria from any modern web browser without downloading software.',
          icon: 'material-symbols-outlined public',
          color: '#c0392b', // Red
          screenshot: ''
        },
        {
          title: 'Desktop Apps',
          description: 'Native applications for Windows, macOS, and Linux.',
          icon: 'material-symbols-outlined desktop_windows',
          color: '#e74c3c', // Light red
          screenshot: ''
        },
        {
          title: 'Mobile Apps',
          description: 'iOS and Android apps designed specifically for the mobile experience.',
          icon: 'material-symbols-outlined smartphone',
          color: '#c0392b', // Red
          screenshot: ''
        },
        {
          title: 'Synchronized Experience',
          description: 'Seamlessly switch between devices while maintaining your exact place in conversations and feeds.',
          icon: 'material-symbols-outlined sync_alt',
          color: '#e74c3c', // Light red
          screenshot: ''
        }
      ]
    }
  ];

  // Key features with proper icons
  keyFeatures = [
    {
      title: 'Fast & Responsive',
      description: 'Optimized for speed and responsiveness, and doesn\'t require you to use large centralized relays.',
      icon: 'material-symbols-outlined bolt',
      color: '#2980b9' // Blue
    },
    {
      title: 'Auto Relay Discovery',
      description: 'Automatically connects to the right relays to find user content.',
      icon: 'material-symbols-outlined sync',
      color: '#16a085' // Teal
    },
    {
      title: 'Multiple Sign Options',
      description: 'Support for various signing methods to keep your keys secure.',
      icon: 'material-symbols-outlined key',
      color: '#c0392b' // Red
    },
    {
      title: 'Multi-platform',
      description: 'Available as web, desktop, and mobile application.',
      icon: 'material-symbols-outlined devices',
      color: '#8e44ad' // Purple
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

  // Lightbox properties
  showLightbox = false;
  lightboxImageSrc = '';
  lightboxAlt = '';

  openLightbox(imageSrc: string, alt: string): void {
    this.lightboxImageSrc = imageSrc;
    this.lightboxAlt = alt;
    this.showLightbox = true;
    document.body.classList.add('no-scroll');
  }

  closeLightbox(): void {
    this.showLightbox = false;
    document.body.classList.remove('no-scroll');
  }

  // Get category icon for navigation buttons
  getCategoryIcon(categoryId: string): string {
    const iconMap: { [key: string]: string } = {
      'user-experience': 'star',
      'ai-intelligence': 'psychology',
      'media-content': 'perm_media',
      'scaling': 'public',
      'infrastructure': 'dns',
      'cross-platform': 'devices'
    };
    return iconMap[categoryId] || 'circle';
  }
}