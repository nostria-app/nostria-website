import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NostrEventEmbedComponent } from '../../components/nostr-event-embed/nostr-event-embed.component';

interface Testimonial {
  naddr: string;
  category: 'creators' | 'developers' | 'businesses' | 'community';
}

@Component({
  selector: 'app-testimonials',
  imports: [RouterLink, NostrEventEmbedComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  // Track current filter
  currentFilter = signal<string>('all');
  
  // Real testimonials from Nostr events - replace these with actual naddr values
  // These are placeholder addresses that should be replaced with real testimonial events
  testimonials: Testimonial[] = [
    // Community testimonials
    { naddr: 'nevent1qvzqqqqqqypzq0c34wewydw694xa5htdavh3yvtnga48gk3u545ftgws7ce2gt6qqqsvr6uzxjhmf08820nvljmyuy9cp7qc03znzkv5jpvtr00vll4j3kg3vzjqt', category: 'creators' },
    { naddr: 'nevent1qvzqqqqqqypzq0mhp4ja8fmy48zuk5p6uy37vtk8tx9dqdwcxm32sy8nsaa8gkeyqqs9tanzk756vrcmgasnchnudhw9rc6vsu2frhluxz90c5fj5y9x40qsq59mx', category: 'developers' },
    { naddr: 'nevent1qqsxvhk5hqm2msz4u4c7qjvc3khm4g65kpzh8tlc7dq8ufde5kzwgzspp4mhxue69uhkummn9ekx7mqpr4mhxue69uhkummn9ekx7mqz9rhwden5te0v4jx2m3wdehhxarj9ekxzmny9uq3samnwvaz7tmjv4kxz7fwwdhx7un59esk6ef0', category: 'creators' },
    { naddr: 'nevent1qqszyhp4n72dvn0vkg8pmcy36tzj5znfp6sn93n2txj7s9fmga6xrqpp4mhxue69uhkummn9ekx7mqpr4mhxue69uhkummn9ekx7mqz9rhwden5te0v4jx2m3wdehhxarj9ekxzmny9uq3samnwvaz7tmjv4kxz7fwwdhx7un59esk6ef0', category: 'businesses' },
    { naddr: 'nevent1qqsqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpp4mhxue69uhkummn9ekx7mqpr4mhxue69uhkummn9ekx7mqz9rhwden5te0v4jx2m3wdehhxarj9ekxzmny9uq3samnwvaz7tmjv4kxz7fwwdhx7un59esk6ef0', category: 'community' },
    { naddr: 'nevent1qqsrqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpp4mhxue69uhkummn9ekx7mqpr4mhxue69uhkummn9ekx7mqz9rhwden5te0v4jx2m3wdehhxarj9ekxzmny9uq3samnwvaz7tmjv4kxz7fwwdhx7un59esk6ef0', category: 'developers' },
    { naddr: 'nevent1qqsyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpp4mhxue69uhkummn9ekx7mqpr4mhxue69uhkummn9ekx7mqz9rhwden5te0v4jx2m3wdehhxarj9ekxzmny9uq3samnwvaz7tmjv4kxz7fwwdhx7un59esk6ef0', category: 'creators' },
    { naddr: 'nevent1qqszqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpp4mhxue69uhkummn9ekx7mqpr4mhxue69uhkummn9ekx7mqz9rhwden5te0v4jx2m3wdehhxarj9ekxzmny9uq3samnwvaz7tmjv4kxz7fwwdhx7un59esk6ef0', category: 'businesses' },
    { naddr: 'nevent1qqs0qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpp4mhxue69uhkummn9ekx7mqpr4mhxue69uhkummn9ekx7mqz9rhwden5te0v4jx2m3wdehhxarj9ekxzmny9uq3samnwvaz7tmjv4kxz7fwwdhx7un59esk6ef0', category: 'community' },
  ];

  // Filter categories
  categories = [
    { id: 'all', label: 'All Testimonials' },
    { id: 'community', label: 'Community' },
    { id: 'creators', label: 'Content Creators' },
    { id: 'developers', label: 'Developers' },
    { id: 'businesses', label: 'Businesses' }
  ];

  // Computed filtered testimonials
  filteredTestimonials = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'all') {
      return this.testimonials;
    }
    return this.testimonials.filter(t => t.category === filter);
  });

  setFilter(filter: string): void {
    this.currentFilter.set(filter);
  }
}
