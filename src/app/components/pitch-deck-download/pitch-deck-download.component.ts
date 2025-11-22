import { Component } from '@angular/core';


@Component({
  selector: 'app-pitch-deck-download',
  standalone: true,
  imports: [],
  templateUrl: './pitch-deck-download.component.html',
  styleUrls: ['./pitch-deck-download.component.scss']
})
export class PitchDeckDownloadComponent {
  pitchDeckUrl = 'assets/docs/Nostria-Pre-Seed-Funding.pdf';
  thumbnailUrl = 'assets/docs/Nostria-Pre-Seed-Funding.jpg';
  fileSize = '558KB';
  
  downloadPitchDeck(): void {
    // This will trigger the browser's download behavior
    const link = document.createElement('a');
    link.href = this.pitchDeckUrl;
    link.download = 'Nostria-Pre-Seed-Funding.pdf';
    link.click();
  }
}
