import { Component, ChangeDetectionStrategy, input, signal, computed, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface NostrEvent {
  id: string;
  pubkey: string;
  created_at: number;
  kind: number;
  content: string;
  tags: string[][];
  sig: string;
}

interface DecodedNaddr {
  identifier: string;
  pubkey: string;
  kind: number;
  relays: string[];
}

interface AuthorProfile {
  name?: string;
  display_name?: string;
  picture?: string;
  nip05?: string;
  about?: string;
}

interface MentionedProfile {
  pubkey: string;
  profile: AuthorProfile | null;
  originalMatch: string;
}

@Component({
  selector: 'app-nostr-event-embed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="nostr-event-embed" [class.loading]="loading()" [class.error]="error()">
      @if (loading()) {
        <div class="loading-state">
          <div class="loading-spinner"></div>
          <span>Loading from Nostr...</span>
        </div>
      } @else if (error()) {
        <div class="error-state">
          <span class="material-symbols-outlined">error</span>
          <span>{{ error() }}</span>
        </div>
      } @else if (event()) {
        <div class="event-content">
          <div class="event-header">
            @if (authorProfile()?.picture) {
              <img [src]="authorProfile()?.picture" [alt]="displayName()" class="author-avatar" />
            } @else {
              <div class="author-avatar placeholder">
                <span class="material-symbols-outlined">person</span>
              </div>
            }
            <div class="author-info">
              <span class="author-name">{{ displayName() }}</span>
              @if (authorProfile()?.nip05) {
                <span class="author-nip05">{{ authorProfile()?.nip05 }}</span>
              }
            </div>
            <a [href]="nostrLink()" target="_blank" rel="noopener" class="nostr-link" title="View on Nostr">
              <span class="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
          <div class="event-body">
            <p class="event-text">{{ renderedContent() }}</p>
          </div>
          <div class="event-footer">
            <time [dateTime]="eventDate()">{{ formattedDate() }}</time>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .nostr-event-embed {
      background: var(--surface, #fff);
      border: 1px solid var(--divider, #e0e0e0);
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
      }

      &.loading, &.error {
        min-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .loading-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      color: var(--text-secondary, #666);

      .loading-spinner {
        width: 32px;
        height: 32px;
        border: 3px solid var(--divider, #e0e0e0);
        border-top-color: var(--primary-color, #6200ea);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .error-state {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--error-color, #d32f2f);
      
      .material-symbols-outlined {
        font-size: 1.5rem;
      }
    }

    .event-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .event-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .author-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;

        &.placeholder {
          background: var(--divider, #e0e0e0);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary, #666);
        }
      }

      .author-info {
        flex: 1;
        display: flex;
        flex-direction: column;

        .author-name {
          font-weight: 600;
          color: var(--text-primary, #212121);
        }

        .author-nip05 {
          font-size: 0.875rem;
          color: var(--text-secondary, #666);
        }
      }

      .nostr-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        color: var(--text-secondary, #666);
        text-decoration: none;
        transition: color 0.2s ease;
        opacity: 0.6;

        &:hover {
          color: var(--primary-color, #6200ea);
          opacity: 1;
        }

        .material-symbols-outlined {
          font-size: 1.125rem;
        }
      }
    }

    .event-body {
      overflow: hidden;
      
      .event-text {
        font-size: 1.125rem;
        line-height: 1.6;
        color: var(--text-primary, #212121);
        margin: 0;
        font-style: italic;
        word-break: break-word;
        overflow-wrap: anywhere;
        
        &::before {
          content: '"';
        }
        
        &::after {
          content: '"';
        }
      }
    }

    .event-footer {
      padding-top: 0.5rem;
      border-top: 1px solid var(--divider, #e0e0e0);

      time {
        font-size: 0.875rem;
        color: var(--text-secondary, #666);
      }
    }
  `]
})
export class NostrEventEmbedComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  
  /** The naddr or nevent identifier to fetch */
  naddr = input.required<string>();
  
  /** The event data once fetched */
  event = signal<NostrEvent | null>(null);
  
  /** The author's profile metadata */
  authorProfile = signal<AuthorProfile | null>(null);
  
  /** Mentioned profiles in the content */
  mentionedProfiles = signal<Map<string, AuthorProfile | null>>(new Map());
  
  /** Loading state */
  loading = signal(true);
  
  /** Error message if fetch failed */
  error = signal<string | null>(null);

  private websocket: WebSocket | null = null;
  private subscriptionId = '';
  private relayUrl = '';

  displayName = computed(() => {
    const profile = this.authorProfile();
    if (profile?.display_name) return profile.display_name;
    if (profile?.name) return profile.name;
    const pubkey = this.event()?.pubkey;
    return pubkey ? `${pubkey.slice(0, 8)}...${pubkey.slice(-8)}` : 'Unknown';
  });

  /** Render content with resolved @mentions */
  renderedContent = computed(() => {
    const evt = this.event();
    if (!evt) return '';
    
    let content = evt.content;
    const profiles = this.mentionedProfiles();
    
    // Replace nostr:nprofile and nostr:npub references with display names
    const nostrPattern = /nostr:(nprofile1[a-z0-9]+|npub1[a-z0-9]+)/gi;
    
    content = content.replace(nostrPattern, (match, identifier) => {
      const pubkey = this.extractPubkeyFromIdentifier(identifier);
      if (pubkey && profiles.has(pubkey)) {
        const profile = profiles.get(pubkey);
        if (profile) {
          const name = profile.display_name || profile.name || `@${pubkey.slice(0, 8)}...`;
          return `@${name}`;
        }
      }
      // If we couldn't resolve, show a shortened version
      return `@${identifier.slice(0, 12)}...`;
    });
    
    return content;
  });

  eventDate = computed(() => {
    const evt = this.event();
    return evt ? new Date(evt.created_at * 1000).toISOString() : '';
  });

  formattedDate = computed(() => {
    const evt = this.event();
    if (!evt) return '';
    const date = new Date(evt.created_at * 1000);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  nostrLink = computed(() => {
    return `https://nostria.app/e/${this.naddr()}`;
  });

  ngOnInit() {
    // Only fetch events in browser environment (not during SSR)
    if (isPlatformBrowser(this.platformId)) {
      this.fetchEvent();
    } else {
      // On server, just show loading state (will hydrate on client)
      this.loading.set(true);
    }
  }

  ngOnDestroy() {
    this.closeConnection();
  }

  private async fetchEvent() {
    try {
      this.loading.set(true);
      this.error.set(null);

      const decoded = this.decodeNaddr(this.naddr());
      if (!decoded) {
        throw new Error('Invalid naddr format');
      }

      if (decoded.relays.length === 0) {
        // Fallback to common relays
        decoded.relays = ['wss://relay.damus.io', 'wss://nos.lol', 'wss://relay.nostr.band'];
      }

      await this.connectAndFetch(decoded);
    } catch (err) {
      this.error.set(err instanceof Error ? err.message : 'Failed to fetch event');
      this.loading.set(false);
    }
  }

  private decodeNaddr(naddr: string): DecodedNaddr | null {
    try {
      // Remove the naddr1 prefix and decode from bech32
      if (!naddr.startsWith('naddr1') && !naddr.startsWith('nevent1') && !naddr.startsWith('note1')) {
        return null;
      }

      const decoded = this.bech32Decode(naddr);
      if (!decoded) return null;

      const data = decoded.data;
      let offset = 0;
      let identifier = '';
      let pubkey = '';
      let kind = 1; // Default to kind 1 (text note)
      const relays: string[] = [];

      // For note1, it's just the event ID
      if (naddr.startsWith('note1')) {
        return {
          identifier: this.bytesToHex(data),
          pubkey: '',
          kind: 1,
          relays: ['wss://relay.damus.io', 'wss://nos.lol']
        };
      }

      // For nevent1, parse TLV
      if (naddr.startsWith('nevent1')) {
        while (offset < data.length) {
          const type = data[offset];
          const length = data[offset + 1];
          const value = data.slice(offset + 2, offset + 2 + length);
          offset += 2 + length;

          switch (type) {
            case 0: // Event ID
              identifier = this.bytesToHex(value);
              break;
            case 1: // Relay
              relays.push(new TextDecoder().decode(value));
              break;
            case 2: // Author pubkey
              pubkey = this.bytesToHex(value);
              break;
            case 3: // Kind
              kind = value.reduce((acc, byte, i) => acc + (byte << (8 * (value.length - 1 - i))), 0);
              break;
          }
        }
        return { identifier, pubkey, kind, relays };
      }

      // For naddr1, parse TLV format
      while (offset < data.length) {
        const type = data[offset];
        const length = data[offset + 1];
        const value = data.slice(offset + 2, offset + 2 + length);
        offset += 2 + length;

        switch (type) {
          case 0: // Identifier (d tag)
            identifier = new TextDecoder().decode(value);
            break;
          case 1: // Relay
            relays.push(new TextDecoder().decode(value));
            break;
          case 2: // Author pubkey
            pubkey = this.bytesToHex(value);
            break;
          case 3: // Kind
            kind = value.reduce((acc, byte, i) => acc + (byte << (8 * (value.length - 1 - i))), 0);
            break;
        }
      }

      return { identifier, pubkey, kind, relays };
    } catch {
      return null;
    }
  }

  private bech32Decode(str: string): { prefix: string; data: Uint8Array } | null {
    const CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
    const lower = str.toLowerCase();
    const separatorIndex = lower.lastIndexOf('1');
    
    if (separatorIndex < 1) return null;
    
    const prefix = lower.slice(0, separatorIndex);
    const dataStr = lower.slice(separatorIndex + 1);
    
    const data5bit: number[] = [];
    for (const char of dataStr) {
      const idx = CHARSET.indexOf(char);
      if (idx === -1) return null;
      data5bit.push(idx);
    }
    
    // Remove checksum (last 6 characters)
    const data5bitWithoutChecksum = data5bit.slice(0, -6);
    
    // Convert from 5-bit to 8-bit
    const data = this.convert5to8(data5bitWithoutChecksum);
    
    return { prefix, data };
  }

  private convert5to8(data: number[]): Uint8Array {
    let acc = 0;
    let bits = 0;
    const result: number[] = [];
    
    for (const value of data) {
      acc = (acc << 5) | value;
      bits += 5;
      while (bits >= 8) {
        bits -= 8;
        result.push((acc >> bits) & 0xff);
      }
    }
    
    return new Uint8Array(result);
  }

  private bytesToHex(bytes: Uint8Array): string {
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  private async connectAndFetch(decoded: DecodedNaddr): Promise<void> {
    const relayUrl = decoded.relays[0];
    
    return new Promise((resolve, reject) => {
      try {
        this.websocket = new WebSocket(relayUrl);
        this.subscriptionId = Math.random().toString(36).substring(2, 15);

        const timeout = setTimeout(() => {
          this.closeConnection();
          reject(new Error('Connection timeout'));
        }, 10000);

        this.websocket.onopen = () => {
          // Build filter based on what we have
          let filter: Record<string, unknown> = {};
          
          if (this.naddr().startsWith('note1') || this.naddr().startsWith('nevent1')) {
            // For note/nevent, the identifier is the event ID
            filter = { ids: [decoded.identifier] };
          } else {
            // For naddr, we need to find by kind, pubkey, and d tag
            filter = {
              kinds: [decoded.kind],
              authors: [decoded.pubkey],
              '#d': [decoded.identifier]
            };
          }

          const request = JSON.stringify(['REQ', this.subscriptionId, filter]);
          this.websocket?.send(request);
        };

        this.websocket.onmessage = (msg) => {
          try {
            const data = JSON.parse(msg.data);
            
            if (data[0] === 'EVENT' && data[1] === this.subscriptionId) {
              const event = data[2] as NostrEvent;
              this.event.set(event);
              
              // Now fetch author profile
              this.fetchAuthorProfile(event.pubkey, relayUrl);
              
              // Parse and fetch mentioned profiles
              this.fetchMentionedProfiles(event.content, relayUrl);
              
              clearTimeout(timeout);
              this.loading.set(false);
            } else if (data[0] === 'EOSE') {
              if (!this.event()) {
                clearTimeout(timeout);
                this.error.set('Event not found');
                this.loading.set(false);
              }
              this.closeConnection();
              resolve();
            }
          } catch {
            // Ignore parse errors
          }
        };

        this.websocket.onerror = () => {
          clearTimeout(timeout);
          reject(new Error('WebSocket error'));
        };

        this.websocket.onclose = () => {
          clearTimeout(timeout);
        };
      } catch (err) {
        reject(err);
      }
    });
  }

  private fetchAuthorProfile(pubkey: string, relayUrl: string): void {
    const ws = new WebSocket(relayUrl);
    const subId = Math.random().toString(36).substring(2, 15);

    ws.onopen = () => {
      const request = JSON.stringify(['REQ', subId, {
        kinds: [0],
        authors: [pubkey],
        limit: 1
      }]);
      ws.send(request);
    };

    ws.onmessage = (msg) => {
      try {
        const data = JSON.parse(msg.data);
        
        if (data[0] === 'EVENT' && data[1] === subId) {
          const event = data[2] as NostrEvent;
          const profile = JSON.parse(event.content) as AuthorProfile;
          this.authorProfile.set(profile);
          ws.close();
        } else if (data[0] === 'EOSE') {
          ws.close();
        }
      } catch {
        // Ignore parse errors
      }
    };

    setTimeout(() => ws.close(), 5000);
  }

  /** Extract pubkey from nprofile or npub identifier */
  private extractPubkeyFromIdentifier(identifier: string): string | null {
    try {
      if (identifier.startsWith('npub1')) {
        // npub is just the pubkey encoded in bech32
        const decoded = this.bech32Decode(identifier);
        if (decoded) {
          return this.bytesToHex(decoded.data);
        }
      } else if (identifier.startsWith('nprofile1')) {
        // nprofile contains TLV data with pubkey at type 0
        const decoded = this.bech32Decode(identifier);
        if (decoded) {
          const data = decoded.data;
          let offset = 0;
          
          while (offset < data.length) {
            const type = data[offset];
            const length = data[offset + 1];
            const value = data.slice(offset + 2, offset + 2 + length);
            offset += 2 + length;
            
            if (type === 0) {
              // Type 0 is the pubkey
              return this.bytesToHex(value);
            }
          }
        }
      }
    } catch {
      // Ignore decode errors
    }
    return null;
  }

  /** Fetch profiles for all mentioned users in content */
  private fetchMentionedProfiles(content: string, relayUrl: string): void {
    const nostrPattern = /nostr:(nprofile1[a-z0-9]+|npub1[a-z0-9]+)/gi;
    const matches = content.matchAll(nostrPattern);
    const pubkeys = new Set<string>();
    
    for (const match of matches) {
      const pubkey = this.extractPubkeyFromIdentifier(match[1]);
      if (pubkey) {
        pubkeys.add(pubkey);
      }
    }
    
    if (pubkeys.size === 0) return;
    
    // Fetch all mentioned profiles
    const ws = new WebSocket(relayUrl);
    const subId = Math.random().toString(36).substring(2, 15);
    const profileMap = new Map<string, AuthorProfile | null>();
    
    // Initialize with null values
    pubkeys.forEach(pk => profileMap.set(pk, null));
    this.mentionedProfiles.set(new Map(profileMap));

    ws.onopen = () => {
      const request = JSON.stringify(['REQ', subId, {
        kinds: [0],
        authors: Array.from(pubkeys)
      }]);
      ws.send(request);
    };

    ws.onmessage = (msg) => {
      try {
        const data = JSON.parse(msg.data);
        
        if (data[0] === 'EVENT' && data[1] === subId) {
          const event = data[2] as NostrEvent;
          const profile = JSON.parse(event.content) as AuthorProfile;
          profileMap.set(event.pubkey, profile);
          // Update the signal with new map
          this.mentionedProfiles.set(new Map(profileMap));
        } else if (data[0] === 'EOSE') {
          ws.close();
        }
      } catch {
        // Ignore parse errors
      }
    };

    setTimeout(() => ws.close(), 5000);
  }

  private closeConnection(): void {
    if (this.websocket) {
      if (this.subscriptionId) {
        try {
          this.websocket.send(JSON.stringify(['CLOSE', this.subscriptionId]));
        } catch {
          // Ignore if connection already closed
        }
      }
      this.websocket.close();
      this.websocket = null;
    }
  }
}
