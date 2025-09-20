import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipeModule } from '../../shared/pipes/safe.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PitchDeckDownloadComponent } from '../../components/pitch-deck-download/pitch-deck-download.component';

@Component({
  selector: 'app-funding',
  standalone: true,
  imports: [CommonModule, SafePipeModule, YouTubePlayerModule, PitchDeckDownloadComponent],
  templateUrl: './funding.component.html',
  styleUrl: './funding.component.scss'
})
export class FundingComponent implements OnInit {

  // Funding videos - keeping the same videos as they show project progress
  fundingVideos = [
    {
      title: 'Nostria: Angor Revenue Share Overview',
      description: 'Explaining the tokenless Revenue-Based Financing structure, weighting model, and monthly BTC distributions via Angor.',
      youtubeId: 'a38kcmvi_9E'
    },
    {
      title: 'Nostria: Contributing via Bitcoin',
      description: 'Tutorial on contributing capital in Bitcoin / Lightning and how weighted shares are tracked on Angor.',
      youtubeId: 'AsPuEoy8fWc'
    },
    {
      title: 'Nostria: Update May 9th 2025',
      description: 'The latest updates on our progress, roadmap, and upcoming features for Nostria.',
      youtubeId: 'ZvInhmp0YAI'
    },
    {
      title: 'Nostria: Update May 19th 2025',
      description: 'Demonstration of latest updates to Nostria app and platform.',
      youtubeId: 'e7a4J6RDmcc'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // No initialization needed for RBF structure
  }

  // Raise economics
  private readonly targetUsd = 400_000;
  // Pre-seed fully closed & weighted
  private readonly preSeedUsd = 38_000;

  // Placeholder BTC rate (can later be replaced with a service fetching live price)
  btcUsdRate = signal<number>(103663); // 1 BTC = 65,000 USD (example snapshot)

  // Signals for raised amounts (could be replaced by dynamic backend fetch)
  raisedUsdSig = signal<number>(this.preSeedUsd);
  raisedBtcSig = signal<number>(this.raisedUsdSig() / this.btcUsdRate());

  // Exposed getters for template (keeping simple functions rather than computed for clarity here)
  get raisedUsd() { return this.raisedUsdSig(); }
  get raisedBtc() { return this.raisedBtcSig(); }

  progressPct(): number {
    return +( (this.raisedUsd / this.targetUsd) * 100 ).toFixed(1);
  }
}
