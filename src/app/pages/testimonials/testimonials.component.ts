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
    { naddr: 'nevent1qvzqqqqqqypzpsz2urcgqnyttj5dl6l6zcjpg2ltk4vzl8rh5kla75jg8xcv645yqqsrlcza74gcsypkaznf4xy482qcnqm4ppchu0gquzecf4nuh90gc6qpdsnjz', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzqyqzr784mk8kn85nxwrej728hp732m4h54rx9p7um4ckm4puwrzqqqs830p84t8chd9jfkgydv7svjwa46nzj9qgdd0wjvzln4akzn2wsagdfzh4r', category: 'businesses' },
    { naddr: 'nevent1qvzqqqqqqypzpdlddzcx9hntfgfw28749pwpu8sw6rj39rx6jw43rdq4pd276vhuqqsrcd6x5mxgyfp55gw3dyk5v6nd03r984rjc6kenkdrqg6xs225nesd6kn3e', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzqgxjnqgddf0e9vz94hszawadeypk6aquc6rtqpq4cs45ydh7ftf0qqspr4qu6g6gmf45v8glw264xpdza7etduua5qqyvkf3q8pmz9f2ggces4nhm', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzqxp7ugcnp0dy4au03sl7et53jzznwsd3arcqn3s7yz9zsfg6laemqqsrn05x8ffcet200k4g08554kk53rscuq2n58usslf83ffpxng5r8sp995nf', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzp7mphy7cvnj0p6a8v6ac24hjmspx968fs5qju2d69pggm4fqvlvcqqszjlm478mwgndm8p6xfs6jlgng92qqkcqsyl4wx4z9u8v5xnyeprqee4gjp', category: 'businesses' },
    { naddr: 'nevent1qvzqqqqqqypzppcvlct2et647sz6g3vtfw3cxru9esyvgtfz7hz20fkz8wue8hnzqqsznh36kdn7pl4uedpns2t25r9kvyeh9f0x78r5t0tlkp06cnnj9ec25mqt0', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzpa5rapcrtaadfazwpwvvl0v4xlskg4df9nfcem7yevcaka2h7hhjqqsd0k9vlk4jlwmlqndz5wsdfjq3ghxyapu88m6mexcwlds6hkw52xg4mjme7', category: 'developers' },
    { naddr: 'nevent1qvzqqqqqqypzppcvlct2et647sz6g3vtfw3cxru9esyvgtfz7hz20fkz8wue8hnzqqsznh36kdn7pl4uedpns2t25r9kvyeh9f0x78r5t0tlkp06cnnj9ec25mqt0', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzppcvlct2et647sz6g3vtfw3cxru9esyvgtfz7hz20fkz8wue8hnzqqsznh36kdn7pl4uedpns2t25r9kvyeh9f0x78r5t0tlkp06cnnj9ec25mqt0', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzppcvlct2et647sz6g3vtfw3cxru9esyvgtfz7hz20fkz8wue8hnzqqsznh36kdn7pl4uedpns2t25r9kvyeh9f0x78r5t0tlkp06cnnj9ec25mqt0', category: 'community' },
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
