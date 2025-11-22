import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PitchDeckDownloadComponent } from '../../components/pitch-deck-download/pitch-deck-download.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PitchDeckDownloadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Properties for any interactive elements like testimonial slider
  currentTestimonialIndex = 0;
  testimonials = [
    {
      avatar: 'assets/avatars/user1.jpg',
      text: 'Nostria has completely changed how I use Nostr. The interface is intuitive and the premium features are well worth it for anyone serious about the platform.',
      author: 'Alex Morgan',
      position: 'Crypto Enthusiast',
      rating: 5
    },
    {
      avatar: 'assets/avatars/user2.jpg',
      text: 'As a content creator on Nostr, Nostria\'s premium features have been a game-changer for me. The media servers and discovery relays help me reach a wider audience.',
      author: 'Jamie Chen',
      position: 'Digital Creator',
      rating: 5
    },
    {
      avatar: 'assets/avatars/user3.jpg',
      text: 'I\'ve tried several Nostr clients, but Nostria stands out with its balance of simplicity and power. The cross-platform support is fantastic - my experience is consistent everywhere.',
      author: 'Sam Reeves',
      position: 'Software Developer',
      rating: 5
    }
  ];

  // Lightbox properties
  showLightbox = false;
  lightboxImageSrc = '';
  lightboxAlt = '';

  screenshots = [
    { src: 'assets/screenshots/screenshot-2025-11-22-160125.png', alt: 'Get started', title: 'Create a new account with only two clicks' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160125.png', alt: 'Get started', title: 'Create a new account with only two clicks' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160157.png', alt: 'Account setup', title: 'No e-mail, no phone numbers, you can be anonymous' },
    { src: 'assets/screenshots/screenshot-2025-11-22-145538.png', alt: 'Home Feed', title: 'Feeds with multiple columns' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160921.png', alt: 'Threads', title: 'Read long threads with ease' },
    { src: 'assets/screenshots/screenshot-2025-11-22-145615.png', alt: 'Rich profiles', title: 'View profiles of following and everyone else' },
    { src: 'assets/screenshots/screenshot-2025-11-22-145559.png', alt: 'Organize favorites', title: 'Add favorites and get quick access' },
    { src: 'assets/screenshots/screenshot-2025-11-22-145635.png', alt: 'People', title: 'Explorer the people you follow, with filtering and view options' },
    { src: 'assets/screenshots/screenshot-2025-11-22-145649.png', alt: 'Discover', title: 'Multiple ways to discover new and interesting people' },
    { src: 'assets/screenshots/screenshot-2025-11-22-145710.png', alt: 'Notifications', title: 'Keep up with your activity' },
    { src: 'assets/screenshots/screenshot-2025-11-22-145829.png', alt: 'Live Streams', title: 'Enjoy live streams' },
    { src: 'assets/screenshots/screenshot-2025-11-22-145843.png', alt: 'Live Streams Viewer', title: 'Watch streams while browsing Nostr' },
    { src: 'assets/screenshots/screenshot-2025-11-22-150104.png', alt: 'Write Notes', title: 'Publish notes with ease, add photos, videos and files' },
    { src: 'assets/screenshots/screenshot-2025-11-22-150255.png', alt: 'Articles', title: 'Write long form content on Nostra, with a beautiful and intuitive editor' },
    { src: 'assets/screenshots/screenshot-2025-11-22-150348.png', alt: 'Lists', title: 'Powerful lists editor for all your lists on Nostr' },
    { src: 'assets/screenshots/screenshot-2025-11-22-150455.png', alt: 'Media Queue', title: 'Enjoy videos, music and podcasts' },
    { src: 'assets/screenshots/screenshot-2025-11-22-150516.png', alt: 'AI Models', title: 'Run AI locally on your device with full privacy' },
    { src: 'assets/screenshots/screenshot-2025-11-22-150526.png', alt: 'AI Settings', title: 'You are always in control' },
    { src: 'assets/screenshots/screenshot-2025-11-22-155807.png', alt: 'Memos', title: 'Keep memos that are synced between your devices' },
    { src: 'assets/screenshots/screenshot-2025-11-22-150643.png', alt: 'Memos: History', title: 'Never loose any memos' },
    { src: 'assets/screenshots/screenshot-2025-11-22-155844.png', alt: 'Multiple Accounts', title: 'Manage multiple accounts with easy, with quick switching' },
    { src: 'assets/screenshots/screenshot-2025-11-22-155919.png', alt: 'Algorithm', title: 'Nostria feeds is powered by a local algorithm based upon your interests' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160047.png', alt: 'Badges', title: 'Show off the badges you received from the social network' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160103.png', alt: 'Badge Editor', title: 'Create your own creative badges and issue to your friends' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160242.png', alt: 'Command Palette', title: 'Super quick navigation with commands' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160302.png', alt: 'Search', title: 'Search cached profiles and quickly open threads and profiles by pasting npub or nevent into search' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160400.png', alt: 'Video Clips', title: 'Record and publish short video clips' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160413.png', alt: 'Audio Clips', title: 'Record and share voice messages' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160446.png', alt: 'Voice Messages', title: 'Listen to the messages that others have published' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160642.png', alt: 'Translation', title: 'Translate to many languages, using local AI with full privacy' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160657.png', alt: 'Read aloud', title: 'Listen to notes using local AI' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160716.png', alt: 'Reporting', title: 'Report unwanted content and help the Nostr community' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160745.png', alt: 'Send Zaps', title: 'Share the joy of sending Bitcoin as rewards for great content' },
    { src: 'assets/screenshots/screenshot-2025-11-22-161136.png', alt: 'Earn Bitcoin', title: 'Setup your Bitcoin wallet and start reciving satoshis for your content' },
    { src: 'assets/screenshots/screenshot-2025-11-22-155836.png', alt: 'Zap History', title: 'Overview of your zapping history' },
    { src: 'assets/screenshots/screenshot-2025-11-22-160204.png', alt: 'Login options', title: 'You can use all possible login options' },

  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    this.setupTestimonialsSlider();
  }

  ngAfterViewInit(): void {
    // Only run scroll reveal setup in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollReveal();
    }
  }

  setupTestimonialsSlider(): void {
    // In a real implementation, would set up an automated slider
    // For now, it's just static with the dots being clickable
  }

  changeTestimonial(index: number): void {
    this.currentTestimonialIndex = index;
    // Would update the displayed testimonial
  }

  scrollToSection(sectionId: string): void {
    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  setupScrollReveal(): void {
    // Ensure we're in browser environment before accessing DOM
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (!revealElements.length) return;
    
    const observerOptions = {
      root: null, // use viewport as root
      rootMargin: '0px 0px -100px 0px', // trigger slightly before element comes into view
      threshold: 0.1 // trigger when 10% of element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    revealElements.forEach(element => {
      // Reset to ensure clean initial state
      element.classList.remove('revealed');
      observer.observe(element);
    });
  }

  openLightbox(imageSrc: string, alt: string): void {
    this.lightboxImageSrc = imageSrc;
    this.lightboxAlt = alt;
    this.showLightbox = true;
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('no-scroll');
    }
  }

  closeLightbox(): void {
    this.showLightbox = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('no-scroll');
    }
  }
}
