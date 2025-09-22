import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seed-pitch-deck-download',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seed-pitch-deck-download.component.html',
  styleUrls: ['./seed-pitch-deck-download.component.scss']
})
export class SeedPitchDeckDownloadComponent {
  pitchDeckUrl = 'assets/docs/Nostria-Seed-Funding.pdf';
  thumbnailUrl = 'assets/docs/Nostria-Seed-Funding.jpg';
  fileSize = '558KB';
  
  downloadPitchDeck(): void {
    // This will trigger the browser's download behavior
    const link = document.createElement('a');
    link.href = this.pitchDeckUrl;
    link.download = 'Nostria-Seed-Funding.pdf';
    link.click();
  }
}
