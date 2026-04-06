import { Routes } from '@angular/router';
import { FeaturesComponent } from './pages/features/features.component';
import { PremiumComponent } from './pages/premium/premium.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PreSeedFundRaisedComponent } from './pages/press/pre-seed-fund-raised/pre-seed-fund-raised.component';
import { PressComponent } from './pages/press/press.component';
import { PreSeedComponent } from './pages/funding/pre-seed.component';
import { MvpReleasedComponent } from './pages/press/mvp-released/mvp-released.component';
import { SeedFundLaunchComponent } from './pages/press/seed-fund-launch/seed-fund-launch.component';
import { Nostria2ReleaseComponent } from './pages/press/nostria-2-release/nostria-2-release.component';
import { ProductHuntLaunchComponent } from './pages/press/product-hunt-launch/product-hunt-launch.component';
import { DiscordRedirectComponent } from './pages/discord-redirect.component';
import { SupportComponent } from './pages/support/support.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { IosRedirectComponent } from './pages/ios-redirect.component';
import type { SeoRouteData } from './services/seo.service';

const siteUrl = 'https://www.nostria.app';
const socialImage = `${siteUrl}/assets/nostria-social.png`;

function pageSeo(seo: SeoRouteData): { seo: SeoRouteData } {
  return { seo };
}

function articleSchema(options: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
}): Record<string, unknown> {
  const url = `${siteUrl}${options.path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: options.headline,
    description: options.description,
    image: socialImage,
    datePublished: options.datePublished,
    dateModified: options.datePublished,
    mainEntityOfPage: url,
    url,
    author: {
      '@type': 'Organization',
      name: 'Nostria'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nostria',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/icons/icon-512x512.png`
      }
    }
  };
}

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Nostria - Built for Human Connection',
    data: pageSeo({
      title: 'Nostria - Built for Human Connection',
      description: 'Nostria is a social network built for human connection. Nostria is social without the noise, where you can see your friends again.',
      canonicalPath: '/',
      keywords: ['Nostr client', 'decentralized social network', 'Nostr app', 'privacy-first social media', 'Nostria'],
      image: socialImage,
      type: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Nostria',
        applicationCategory: 'SocialNetworkingApplication',
        operatingSystem: 'Web, Windows, macOS, Linux, Android, iOS',
        description: 'Nostria is social without the noise, where you can see your friends again.',
        url: siteUrl,
        image: socialImage,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    })
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'download',
    loadComponent: () => import('./pages/download/download.component').then(m => m.DownloadComponent),
    title: 'Download Nostria - Windows, Mac, Linux, Android, iOS, and Web',
    data: pageSeo({
      title: 'Download Nostria - Windows, Mac, Linux, Android, iOS, and Web',
      description: 'Download Nostria for Windows, Mac, Linux, Android, iOS, or launch the web app instantly. Choose Microsoft Store, EXE, MSI, AppImage, .deb, DMG, APK, and more.',
      canonicalPath: '/download',
      image: socialImage,
      keywords: ['Download Nostria', 'Nostria Windows download', 'Nostria Mac download', 'Nostria Linux download', 'Nostria Android APK'],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Download Nostria',
        description: 'Official Nostria downloads for Windows, macOS, Linux, Android, iOS, and the web.',
        url: `${siteUrl}/download`
      }
    })
  },
  {
    path: 'hero',
    loadComponent: () => import('./pages/hero/hero.component').then(m => m.HeroComponent),
    title: 'Nostria Overview - Nostr Client by Nostria',
    data: pageSeo({
      title: 'Nostria Overview - Nostr Client by Nostria',
      description: 'See how Nostria feels in practice: calmer, simpler, and built to help you spend more time with the people you care about.',
      canonicalPath: '/hero',
      image: socialImage,
      keywords: ['Nostria overview', 'Nostr social app', 'decentralized social media']
    })
  },
  {
    path: 'features',
    component: FeaturesComponent,
    title: 'Nostria Features - Modern Nostr Client Capabilities',
    data: pageSeo({
      title: 'Nostria Features - Modern Nostr Client Capabilities',
      description: 'Explore the features that make Nostria feel simpler, calmer, and more human across every device you use.',
      canonicalPath: '/features',
      image: socialImage,
      keywords: ['Nostr client features', 'Nostria features', 'decentralized social media app', 'Nostr app for musicians'],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Nostria Features',
        description: 'A closer look at the features that make Nostria feel simple, useful, and made for real connection.',
        url: `${siteUrl}/features`
      }
    })
  },
  {
    path: 'press',
    component: PressComponent,
    title: 'Press & Media - Nostria',
    data: pageSeo({
      title: 'Press & Media - Nostria',
      description: 'Read the latest announcements, releases, and milestones from Nostria as we build social without the noise.',
      canonicalPath: '/press',
      image: socialImage,
      keywords: ['Nostria press', 'Nostr client news', 'decentralized social network announcements'],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Nostria Press & Media',
        description: 'Press releases, updates, and media resources from Nostria.',
        url: `${siteUrl}/press`
      }
    })
  },
  {
    path: 'press/product-hunt-launch',
    component: ProductHuntLaunchComponent,
    title: 'Nostria Launches on Product Hunt - Nostria Press',
    data: pageSeo({
      title: 'Nostria Launches on Product Hunt - Nostria Press',
      description: 'Nostria is scheduled to launch on Product Hunt on April 6th, 2026 at 12:01 AM PDT, inviting the maker community to explore a calmer social network built on Nostr.',
      canonicalPath: '/press/product-hunt-launch',
      image: socialImage,
      type: 'article',
      structuredData: articleSchema({
        headline: 'Nostria Launches on Product Hunt',
        description: 'Nostria is scheduled to launch on Product Hunt on April 6th, 2026 at 12:01 AM PDT, inviting the maker community to explore a calmer social network built on Nostr.',
        path: '/press/product-hunt-launch',
        datePublished: '2026-04-01'
      })
    })
  },
  {
    path: 'press/nostria-2-release',
    component: Nostria2ReleaseComponent,
    title: 'Nostria 2.0: A New Era for Decentralized Social Networking - Nostria Press',
    data: pageSeo({
      title: 'Nostria 2.0: A New Era for Decentralized Social Networking - Nostria Press',
      description: 'Nostria 2.0 brings a smoother, more polished experience so it is easier to focus on people, conversations, and community.',
      canonicalPath: '/press/nostria-2-release',
      image: socialImage,
      type: 'article',
      structuredData: articleSchema({
        headline: 'Nostria 2.0: A New Era for Decentralized Social Networking',
        description: 'Nostria 2.0 brings a smoother, more polished experience so it is easier to focus on people, conversations, and community.',
        path: '/press/nostria-2-release',
        datePublished: '2025-12-29'
      })
    })
  },
  {
    path: 'press/seed-fund-launch',
    component: SeedFundLaunchComponent,
    title: 'Seed Funding Launch Announcement - Nostria Press',
    data: pageSeo({
      title: 'Seed Funding Launch Announcement - Nostria Press',
      description: 'Nostria announces its seed round and shares how we plan to keep building a calmer, more human social network.',
      canonicalPath: '/press/seed-fund-launch',
      image: socialImage,
      type: 'article',
      structuredData: articleSchema({
        headline: 'Nostria Launches $400,000 Seed Round via Revenue-Based Financing on Angor Protocol',
        description: 'Nostria announces its seed round and shares how we plan to keep building a calmer, more human social network.',
        path: '/press/seed-fund-launch',
        datePublished: '2025-10-06'
      })
    })
  },
  {
    path: 'press/pre-seed-fund-raised',
    component: PreSeedFundRaisedComponent,
    title: 'Pre-Seed Funding Announcement - Nostria Press',
    data: pageSeo({
      title: 'Pre-Seed Funding Announcement - Nostria Press',
      description: 'Nostria shares the story of its first funding round and the next steps in building social without the noise.',
      canonicalPath: '/press/pre-seed-fund-raised',
      image: socialImage,
      type: 'article',
      structuredData: articleSchema({
        headline: 'Nostria Successfully Completes $30,000 Pre-Seed Funding Round Using Angor Protocol',
        description: 'Nostria shares the story of its first funding round and the next steps in building social without the noise.',
        path: '/press/pre-seed-fund-raised',
        datePublished: '2025-05-31'
      })
    })
  },
  {
    path: 'press/mvp-released',
    component: MvpReleasedComponent,
    title: 'MVP Launch: The Beginning has Started - Nostria Press',
    data: pageSeo({
      title: 'MVP Launch: The Beginning has Started - Nostria Press',
      description: 'Read the announcement for the first public version of Nostria and the beginning of a more human social experience.',
      canonicalPath: '/press/mvp-released',
      image: socialImage,
      type: 'article',
      structuredData: articleSchema({
        headline: 'Nostria Launch: The Beginning has Started',
        description: 'Read the announcement for the first public version of Nostria and the beginning of a more human social experience.',
        path: '/press/mvp-released',
        datePublished: '2025-08-31'
      })
    })
  },
  {
    path: 'premium',
    component: PremiumComponent,
    title: 'Nostria Premium - Dedicated Nostr Infrastructure',
    data: pageSeo({
      title: 'Nostria Premium - Dedicated Nostr Infrastructure',
      description: 'Get more from Nostria with premium tools, smoother performance, and extra support for the people who use it every day.',
      canonicalPath: '/premium',
      image: socialImage,
      type: 'product',
      keywords: ['Nostr premium', 'premium relay', 'Nostr infrastructure', 'Nostria Premium'],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Nostria Premium',
        description: 'Premium tools and smoother performance for people who want more from Nostria.',
        brand: {
          '@type': 'Brand',
          name: 'Nostria'
        },
        image: socialImage,
        offers: {
          '@type': 'Offer',
          price: '10',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${siteUrl}/premium`
        }
      }
    })
  },
  {
    path: 'funding',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'funding/pre-seed',
    component: PreSeedComponent,
    title: 'Nostria Pre-Seed Funding - Company Update',
    data: pageSeo({
      title: 'Nostria Pre-Seed Funding - Company Update',
      description: 'See the details from Nostria’s first funding round and how that support helped us keep building.',
      canonicalPath: '/funding/pre-seed',
      image: socialImage,
      type: 'article'
    })
  },
  {
    path: 'terms',
    component: TermsComponent,
    title: 'Terms of Service - Nostria',
    data: pageSeo({
      title: 'Terms of Service - Nostria',
      description: 'Review the terms for using Nostria, including the website, apps, and premium services.',
      canonicalPath: '/terms',
      image: socialImage
    })
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
    title: 'Privacy Policy - Nostria',
    data: pageSeo({
      title: 'Privacy Policy - Nostria',
      description: 'Read how Nostria handles privacy and the information connected to the website, apps, and your account.',
      canonicalPath: '/privacy',
      image: socialImage
    })
  },
  {
    path: 'policy',
    component: PolicyComponent,
    title: 'Content Policy - Nostria',
    data: pageSeo({
      title: 'Content Policy - Nostria',
      description: 'Read the expectations for safe and respectful participation across Nostria and its community spaces.',
      canonicalPath: '/policy',
      image: socialImage
    })
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
    title: 'Nostria Reviews & Testimonials',
    data: pageSeo({
      title: 'Nostria Reviews & Testimonials',
      description: 'See what people say about using Nostria and why it feels calmer, simpler, and more social.',
      canonicalPath: '/testimonials',
      image: socialImage,
      keywords: ['Nostria reviews', 'Nostr client testimonials', 'Nostria user feedback']
    })
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Nostria - Manifesto for Human Connection',
    data: pageSeo({
      title: 'About Nostria - Manifesto for Human Connection',
      description: 'Read the Nostria manifesto and why we believe social media should help people feel closer, not more overwhelmed.',
      canonicalPath: '/about',
      image: socialImage,
      keywords: ['about Nostria', 'Nostria manifesto', 'human connection social network']
    })
  },
  {
    path: 'support',
    component: SupportComponent,
    title: 'Get Support - Nostria',
    data: pageSeo({
      title: 'Get Support - Nostria',
      description: 'Get help with Nostria, find the right support channel, and get answers when you need them.',
      canonicalPath: '/support',
      image: socialImage,
      keywords: ['Nostria support', 'Nostr app help', 'Nostria help center']
    })
  },
  {
    path: 'discord',
    component: DiscordRedirectComponent,
    title: 'Join Our Discord - Nostria',
    data: pageSeo({
      title: 'Join Our Discord - Nostria',
      description: 'Join the Nostria community on Discord.',
      canonicalPath: '/discord',
      image: socialImage,
      robots: 'noindex, nofollow'
    })
  },
  {
    path: 'ios',
    component: IosRedirectComponent,
    title: 'Join iOS TestFlight - Nostria',
    data: pageSeo({
      title: 'Join iOS TestFlight - Nostria',
      description: 'Join Nostria on iPhone through TestFlight.',
      canonicalPath: '/ios',
      image: socialImage,
      robots: 'noindex, nofollow'
    })
  },
  { path: '**', redirectTo: '' } // Catch any unfound routes and redirect to home
];
