import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SafePipeModule } from '../../shared/pipes/safe.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PitchDeckDownloadComponent } from '../../components/pitch-deck-download/pitch-deck-download.component';

@Component({
  selector: 'app-funding',
  standalone: true,
  imports: [CommonModule, RouterLink, SafePipeModule, YouTubePlayerModule, PitchDeckDownloadComponent],
  templateUrl: './funding.component.html',
  styleUrl: './funding.component.scss'
})
export class FundingComponent implements OnInit {

  // Funding videos - keeping the same videos as they show project progress
  fundingVideos = [
    {
      title: 'Nostria: Pre-Seed Funding Round',
      description: 'Learn about our Pre-Seed funding round and how we plan to grow Nostria and make Nostr scale globally.',
      youtubeId: 'a38kcmvi_9E'
    },
    {
      title: 'Nostria: How to invest using Angor',
      description: 'A step-by-step tutorial on how to invest in Nostria using the Angor platform.',
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
    // No countdown logic needed for Seed Round announcement page
  }
}
