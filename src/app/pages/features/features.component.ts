import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
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
}