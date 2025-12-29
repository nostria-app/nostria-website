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
    { naddr: 'nevent1qvzqqqqqqypzpdlddzcx9hntfgfw28749pwpu8sw6rj39rx6jw43rdq4pd276vhuqqsrcd6x5mxgyfp55gw3dyk5v6nd03r984rjc6kenkdrqg6xs225nesd6kn3e', category: 'creators' },
    { naddr: 'nevent1qvzqqqqqqypzqgxjnqgddf0e9vz94hszawadeypk6aquc6rtqpq4cs45ydh7ftf0qqspr4qu6g6gmf45v8glw264xpdza7etduua5qqyvkf3q8pmz9f2ggces4nhm', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzqxp7ugcnp0dy4au03sl7et53jzznwsd3arcqn3s7yz9zsfg6laemqqsrn05x8ffcet200k4g08554kk53rscuq2n58usslf83ffpxng5r8sp995nf', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzp7mphy7cvnj0p6a8v6ac24hjmspx968fs5qju2d69pggm4fqvlvcqqszjlm478mwgndm8p6xfs6jlgng92qqkcqsyl4wx4z9u8v5xnyeprqee4gjp', category: 'businesses' },
    { naddr: 'nevent1qvzqqqqqqypzppcvlct2et647sz6g3vtfw3cxru9esyvgtfz7hz20fkz8wue8hnzqqsznh36kdn7pl4uedpns2t25r9kvyeh9f0x78r5t0tlkp06cnnj9ec25mqt0', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzpa5rapcrtaadfazwpwvvl0v4xlskg4df9nfcem7yevcaka2h7hhjqqsd0k9vlk4jlwmlqndz5wsdfjq3ghxyapu88m6mexcwlds6hkw52xg4mjme7', category: 'developers' },
    { naddr: 'nevent1qvzqqqqqqypzqprrygad7wxlng3207c8nxdx8r7agtvyxatnuzl3n3p7qya3f4nnqqsrakha9p6n2g7mq62jq4gv9v2208fzwgj7j9syu7f7ra2ljjfwj3caayagd', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzpfgwdzqd7sjzq788n0kvx7jwj364xmntgw8r76dpnz2fzmufp040qqsfs7eq848g3p9zq6eua0xn360lncre2u6ryp98arv48l3vamumz4s7u0jly', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzpzs9l2um95az6xn3c2uw8ypfg3ghv4az7sgytfqu5tuaprmcwdf0qqsvel6h0zup6m8w8qgn2e562w666k49ksa3cx765q9ywnm2x3m3lvcpumszk', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzpqaddssj6dd9e2825hr30y97xcstn6ja0z5hc0ycs7k2llda36t3qqsfyfvu9t5r5evj75wd99hvr02e77txm0hy3qqnxrzdzl08d4qyfmqkgd673', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzpgukudhfv25erkkzzuca63w69m3lmyn96e0eswwptprjjnkfj8cuqqs0aj0ya924rmk3macupugkp3ks929z8hvgfs4jmx25n7dcyyhnr4qhhsmtr', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzqn5n8e3p2synrzves7fpn70y5v4n7e66lpp85dj2smu4kkftaukwqqsf9l5p0p9798ds0w6gdkyp4f9gpa93q0ggf23jza00mx7a58852nc3sef22', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzp69unuqyj33cxtydenpgv0388azcwg5vrehlj50xher0p97mf3kwqqsvpzvqtmlm9kdmsx5xqjrhelgwx6eutcn4d8rtjtp72x0c4v507qq8amx0v', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzp9fkd2numk39n543sdguyycfhhu80wrelghvtrc4ffrsj5hzjt8gqqszthhv04g32rhkhvpyavledsxzcktu5s594tt2s9zqtn5pl2n8kggftqeef', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzqck3wf6m4l3rsmecfn5vw7tnqsa9f02hk8fzuvg2rleudrtx39xfqqsd2wjpup6dmxzmq40gg43v8gvts2qc2gel0tkfq2nx5z4mus2ck3s4geakd', category: 'community' },
    { naddr: 'nevent1qvzqqqqqqypzqw42gkdnaaan20rmwtupsk4yzjxgctlhq2p0da2a6mxqfmm84wpzqqsrmv4z4xxv0wvqc26reur5657pgu2gj6qnqgmxmnt3q6sp7q8ke3qt7cjmc', category: 'community' },
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
