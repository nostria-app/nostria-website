import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const SITE_NAME = 'Nostria';
const SITE_URL = 'https://www.nostria.app';
const DEFAULT_TITLE = 'Nostria - Built for Human Connection';
const DEFAULT_DESCRIPTION = 'Nostria is a social network built for human connection. Nostria is social without the noise, where you can see your friends again.';
const DEFAULT_IMAGE = `${SITE_URL}/assets/nostria-social.png`;
const DEFAULT_ROBOTS = 'index, follow';

type JsonLdValue = Record<string, unknown>;

export interface SeoRouteData {
  title?: string;
  description?: string;
  canonicalPath?: string;
  robots?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  structuredData?: JsonLdValue | JsonLdValue[];
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private initialized = false;

  init(): void {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.applyRouteSeo();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.applyRouteSeo());
  }

  private applyRouteSeo(): void {
    const snapshot = this.getDeepestSnapshot(this.router.routerState.snapshot.root);
    const seo = (snapshot.data['seo'] as SeoRouteData | undefined) ?? {};
    const title = seo.title ?? snapshot.title ?? DEFAULT_TITLE;
    const description = seo.description ?? DEFAULT_DESCRIPTION;
    const robots = seo.robots ?? DEFAULT_ROBOTS;
    const image = seo.image ?? DEFAULT_IMAGE;
    const canonicalUrl = this.getCanonicalUrl(seo.canonicalPath);
    const pageType = seo.type ?? 'website';

    this.title.setTitle(title);
    this.updateMetaTag('name', 'description', description);
    this.updateMetaTag('name', 'robots', robots);
    this.updateMetaTag('name', 'keywords', seo.keywords?.join(', '));
    this.updateMetaTag('property', 'og:title', title);
    this.updateMetaTag('property', 'og:description', description);
    this.updateMetaTag('property', 'og:type', pageType);
    this.updateMetaTag('property', 'og:url', canonicalUrl);
    this.updateMetaTag('property', 'og:image', image);
    this.updateMetaTag('property', 'og:site_name', SITE_NAME);
    this.updateMetaTag('name', 'twitter:card', 'summary_large_image');
    this.updateMetaTag('name', 'twitter:title', title);
    this.updateMetaTag('name', 'twitter:description', description);
    this.updateMetaTag('name', 'twitter:image', image);
    this.updateMetaTag('name', 'twitter:image:alt', seo.imageAlt ?? title);

    this.updateCanonicalLink(canonicalUrl);
    this.updateStructuredData(seo, title, description, canonicalUrl, image);
  }

  private getDeepestSnapshot(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let current = snapshot;

    while (current.firstChild) {
      current = current.firstChild;
    }

    return current;
  }

  private getCanonicalUrl(canonicalPath?: string): string {
    const currentPath = canonicalPath ?? this.router.url.split('?')[0].split('#')[0] ?? '/';
    const normalizedPath = currentPath === '' ? '/' : currentPath;

    return new URL(normalizedPath, SITE_URL).toString();
  }

  private updateMetaTag(attribute: 'name' | 'property', key: string, content?: string): void {
    if (!content) {
      this.meta.removeTag(`${attribute}="${key}"`);
      return;
    }

    this.meta.updateTag({ [attribute]: key, content });
  }

  private updateCanonicalLink(url: string): void {
    let link = this.document.head.querySelector('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private updateStructuredData(
    seo: SeoRouteData,
    title: string,
    description: string,
    canonicalUrl: string,
    image: string
  ): void {
    const globalSchemas = this.getGlobalStructuredData();
    const pageSchemas = seo.structuredData
      ? Array.isArray(seo.structuredData)
        ? seo.structuredData
        : [seo.structuredData]
      : [
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description,
            url: canonicalUrl,
            image
          }
        ];

    const scripts = this.document.head.querySelectorAll('script[data-nostria-seo="true"]');
    scripts.forEach(script => script.remove());

    [...globalSchemas, ...pageSchemas].forEach(schema => {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-nostria-seo', 'true');
      script.text = JSON.stringify(schema);
      this.document.head.appendChild(script);
    });

    if (isPlatformBrowser(this.platformId)) {
      this.document.documentElement.lang = 'en';
    }
  }

  private getGlobalStructuredData(): JsonLdValue[] {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/icons/icon-512x512.png`,
        description: DEFAULT_DESCRIPTION,
        sameAs: [
          'https://github.com/nostria-app',
          'https://x.com/nostriaapp',
          'https://nostria.app/u/nostria'
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL
        }
      }
    ];
  }
}