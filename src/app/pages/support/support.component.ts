import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
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
      link: 'https://nostria.app/npub1nostriaapp',
      buttonText: 'Contact on Nostria'
    }
  ];
}
