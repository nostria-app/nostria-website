import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class SupportComponent {
  supportChannels = [
    {
      title: 'GitHub Issues',
      description: 'Report bugs, request features, or browse existing issues',
      icon: 'bug_report',
      link: 'https://github.com/nostria-app/nostria/issues',
      buttonText: 'Open GitHub Issues'
    },
    {
      title: 'Nostr Support Account',
      description: 'Get direct support from our team on Nostr',
      icon: 'support_agent',
      link: 'https://nostria.app/p/npub1mzz0g9y86ljtt94zl3dsvnlzz93jljwygkdz8pfew20lrvrd0lrsn0c2z2',
      buttonText: 'Contact on Nostria'
    },
    {
      title: 'Premium Email Support',
      description: 'Exclusive priority email support for Premium subscribers',
      icon: 'mail',
      link: '/premium',
      buttonText: 'Learn About Premium',
      isPremium: true
    }
  ];
}
